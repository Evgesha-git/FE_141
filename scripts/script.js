/**
 * @typedef {Object} NoteType
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

class Note {
  /** @type {NoteType} */
  data = {}

  /**
   * @param {{title: ?string, content: ?string, id: ?string}} param0 
   */
  constructor({ title, content, id }) {
    if (!title && !content)
      throw new Error('Хотя бы одно поле должно быть заполено')
    this.data = {
      content,
      title,
      id
    }
  }

  /**
   * 
   * @param {NoteType} data 
   */
  edit(data) {
    this.data = Object.assign(this.data, data)
    // this.data = {...this.data, ...data}
  }

  get() {
    return this.data
  }
}

class Notes {
  /** @type {{data: NoteType}[]} */
  notes = []

  add(data) {
    try {
      const note = new Note(data)
      if (!note.data.id) {
        const id = Date.now().toString(36)
        note.edit({ id })
      }
      
      this.notes.push(note)
      return note
    } catch (error) {
      console.error(error)
    }
  }

  addNotesObject(data) {
    try {
      const note = new Note(data)
      if (!note.data.id) {
        const id = Date.now().toString(36)
        note.edit({ id })
      }

      this.notes.push(note)
    } catch (error) {
      console.error(error)
    }
  }

  get noteById() {
    return this.notes.reduce((acc, note) => {
      acc[note.data.id] = note
      return acc
    }, {})
  }

  edit(id, newData) {
    const note = this.noteById[id]
    if (!note) return
    note.edit(newData)
  }

  remove(id) {
    this.notes = this.notes.filter(note => note.data.id !== id)
  }

  get store() {
    const data = localStorage.getItem('notes')
    return JSON.parse(data)
  }

  set store(notes) {
    const data = JSON.stringify(notes)
    localStorage.setItem('notes', data)
  }

  setCookies(name, maxAge) {
    const options = {
      path: '/',
      'max-age': maxAge
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent('');

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  getCookies(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? true : false
  }

  clearStore() {
    localStorage.removeItem('notes')
  }

  async getData () {
    const resp = await fetch('http://localhost:3000/api/notes')
    const notes = await resp.json()
    return notes
  }

  async setApidata(note) {
    const fetchData = {
      data: note
    }

    await fetch('http://localhost:3000/api/notes', {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-type': 'application/json'
      },
      body: JSON.stringify(fetchData)
    })
  }

  async removeApiData (id) {
    const responce = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': "application/json",
        'Content-type': 'application/json'
      }
    })

    return await responce.json()
  }

  async updateApiData (id, newData) {
    const resp = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': "application/json",
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        data: newData
      })
    })

    return await resp.json()
  }

  get notesIds () {
    return this.notes.map(note => note.data.id)
  }
}

// const notes = new Notes()

class NotesApp extends Notes {
  constructor(selector) {
    super()
    this.container = document.querySelector(selector)
    this.noteContainer = document.createElement('div')
    this.init()
  }

  init() {
    const form = document.createElement('form')
    const title = document.createElement('input')
    title.setAttribute('type', 'text')
    const content = document.createElement('textarea')
    const submit = document.createElement('button')
    submit.setAttribute('type', 'submit')
    submit.innerText = 'Add'

    form.append(title, content, submit)
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const data = {
        title: title.value,
        content: content.value
      }

      const note = this.add(data)
      this.store = this.notes
      this.setCookies('notes', 3600)
      this.setApidata(note)
      this.render()
      title.value = ''
      content.value = ''
    })

    this.noteContainer.classList.add('notes')

    this.container.append(form, this.noteContainer)

    if (!this.getCookies('notes')) {
      this.clearStore()
    }

    if (this.store) {
      // this.notes = this.store
      this.store?.forEach(note => this.add(note.data))
    }

    this.getData()
      .then(notes => {
        notes?.forEach(noteApi => {
          if (!this.notesIds.includes(noteApi.data.id)){ // ([id1, id2, id3]).includes(noteApi.data.id)
            this.add(noteApi.data)
          }
        })
        this.render()
      })
      .catch(error => console.log(error))

    // fetch('http://localhost:3000/api/notes')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     data?.forEach(note => this.addNotesObject(note.data))
    //     this.render()
    //   })
    //   .catch(error => console.log(error))

    this.render()
  }

  render() {
    if (!this.notes.length) { //this.notes.length === 0
      this.noteContainer.innerHTML = `<h2 className="title">Список заметок пуст</h2>`
    } else {
      this.noteContainer.innerHTML = ''
      this.notes.forEach(note => {
        let editable = false
        const noteItem = document.createElement('div')
        noteItem.classList.add('item')
        const contents = document.createElement('div')
        contents.classList.add('noteContent')
        const title = document.createElement('h2')
        const content = document.createElement('p')
        const remove = document.createElement('button')
        const edit = document.createElement('button')

        remove.classList.add('remove')
        remove.innerHTML = '&#10060;'
        remove.addEventListener('click', async () => {
          if (confirm('Вы точно хотите удалить?')) {
            this.remove(note.data.id)
            try {
              await this.removeApiData(note.data.id)
            } catch (error) {
              console.log(error);
            } finally {
              this.store = this.notes
              this.render()
            }
          }
        })

        edit.classList.add('edit')
        edit.innerHTML = '&#9998;'
        edit.addEventListener('click', async () => {
          if (editable) {
            edit.innerHTML = '&#9998;'
            title.contentEditable = false
            content.contentEditable = false
            const data = {
              title: title.innerText,
              content: content.innerText
            }

            this.edit(note.data.id, data)
            this.store = this.notes
            try {
              await this.updateApiData(note.data.id, data)
            } catch (error) {
              console.log(error);              
            }
            this.render()
            editable = !editable
          } else {
            edit.innerHTML = '&#128428;'
            title.contentEditable = true
            content.contentEditable = true
            editable = !editable
          }
        })

        title.innerText = note.data.title
        content.innerText = note.data.content

        contents.append(title, content)
        noteItem.append(contents, edit, remove)

        this.noteContainer.append(noteItem)
      })
    }
  }
}

new NotesApp('.container')

