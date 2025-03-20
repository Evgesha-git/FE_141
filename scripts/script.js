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

      const fetchData = {
        data: note
      }

      fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: {
          'Accept': "application/json",
          'Content-type': 'application/json'
        },
        body: JSON.stringify(fetchData)
      })

      this.notes.push(note)
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

      this.add(data)
      this.store = this.notes
      this.setCookies('notes', 3600)
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
      this.store?.forEach(note => this.addNotesObject(note.data))
    }

    this.getData()
      .then(notes => {
        notes?.forEach(note => this.addNotesObject(note.data))
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
        remove.addEventListener('click', () => {
          if (confirm('Вы точно хотите удалить?')) {
            this.remove(note.data.id)
            fetch(`http://localhost:3000/api/notes/${note.data.id}`, {
              method: 'DELETE'
            })
            this.store = this.notes
            this.render()
          }
        })

        edit.classList.add('edit')
        edit.innerHTML = '&#9998;'
        edit.addEventListener('click', () => {
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


// const requestFunction = (url) => {
//   const request = new XMLHttpRequest()
//   request.open('GET', url)

//   request.responseType = 'text'

//   request.onload = () => {

//   }

//   request.onerror = (error) => {

//   }

//   request.send()
// }

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve('Промис выполнен'), 2000)
//   setTimeout(() => reject('Промис отклонен'), 3000)
// })

// console.log(promise);


// promise
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//   .finally(function () {
//     console.log("Отработает в любом случае")
//   })

function httpGet(url, method) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = function () {
      if (xhr.status.toString()[0] === '2') {
        resolve(xhr.response)
      } else {
        const error = new Error(xhr.statusText)
        error.code = xhr.status
        reject(error)
      }
    }

    xhr.onerror = function () {
      reject(new Error('Network error'))
    }

    xhr.send()
  })
}

httpGet('http://localhost:3000/api/notes/', 'GET')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

// Promise.resolve(1)
//   .then((val) => console.log(val))

// const createPromise = (time, rejected) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(time), time)
//     if (rejected) {
//       setTimeout(() => reject(time / 2), time / 2)
//     }
//   })

// const p1 = createPromise(4000)
// const p2 = createPromise(3000, true)
// const p3 = createPromise(5000)

// Promise.all([p1, p2, p3])
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// Promise.allSettled([p1, p2, p3])
//   .then(data => console.log(data))

// Promise.race([p1, p2, p3])
//   .then(data => console.log(data))

// Promise.resolve('Seccess')
//   .then(x => {
//     console.log('THEN 1', x)
//     return Promise.resolve('Seccess 2')
//   })
//   .catch(x => console.log('CATCH 1', x))
//   .then(x => {
//     console.log('THEN 2', x)
//     return Promise.resolve('Seccess 3')
//   })
//   .catch(x => console.log('CATCH 2', x))
//   .then(x => {
//     console.log('THEN 3', x)
//     return Promise.resolve('Seccess 4')
//   })
//   .catch(x => console.log('CATCH 3', x))
//   .then(x => {
//     console.log('THEN 4', x)
//     return Promise.resolve('Seccess 5')
//   })
//   .catch(x => console.log('CATCH 4', x))

const f = async () => {
  try {
    const x1 = await Promise.resolve('Success')
    console.log('THEN 1', x1)
    const x2 = await Promise.resolve('Success 2')
    console.log('THEN 2', x2)
    const x3 = await Promise.reject('Fail 3')
    console.log('THEN 2', x3)
    const x4 = await Promise.resolve('Success 4')
    console.log('THEN 2', x4)
  } catch (error) {
    console.log('CATCH', error)
  }
}

const getData = async () => {
  const resp = await httpGet('http://localhost:3000/api/notes/', 'GET')
  return resp
}

fetch('http://localhost:3000/api/notes/')
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))