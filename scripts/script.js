/**
 * @todo Дома доработать таким образом, что бы при двайном клике по задаче, или при клике правой кнопкой мыши появлялась возможность редактирования, 
 * а при нажатии Alt + Enter результат сохранялся
 */
/**
 * @typedef {Object} TypeToDoItemParams
 * @property {number} id
 * @property {string} text
 * @property {boolean} complite
 */

/**
 * @param {TypeToDoItemParams} content 
 */
function ToDoItem(content) {
  this.text = content.text
  this.id = content.id
  this.complite = content.complite

  this.setComplite = () => {
    this.complite = !this.complite
  }

  this.edit = (newValue) => {
    this.text = newValue
  }
}

/**
 * 
 * @param {string} formSelector селектор формы ввода
 * @param {string} inputSelector селектор текстового поля
 * @param {string} listSelector селектор блока вывода
 */
const toListCreator = (formSelector, inputSelector, listSelector) => {
  const form = document.querySelector(formSelector)
  const input = document.querySelector(inputSelector)
  const listContainer = document.querySelector(listSelector)

  if (!form && !input && !listContainer) return

  let todoListArr = []

  const localsave = () => {
    const jsonTodoListArr = JSON.stringify(todoListArr)
    localStorage.setItem('todoList', jsonTodoListArr)
  }

  const render = () => {
    listContainer.innerHTML = ''
    todoListArr.forEach(todoListItem => {
      const todolistLine = document.createElement('div')
      todolistLine.classList.add('todo-list--item')

      const todoCheckBox = document.createElement('input')
      todoCheckBox.setAttribute('type', 'checkbox')
      todoCheckBox.classList.add('todo-list--item-check')
      todoCheckBox.checked = todoListItem.complite

      todoCheckBox.addEventListener('click', (event) => {
        event.preventDefault()
        todoListItem.setComplite()
        render()
        localsave()
      })

      const todoText = document.createElement('p')
      todoText.classList.add('todo-list--item-text')
      if (todoListItem.complite) {
        todoText.classList.add('todo-list--item-text__active')
      }
      todoText.innerText = todoListItem.text

      todoText.addEventListener('click', () => {
        todoListItem.setComplite()
        render()
        localsave()
      })

      const delButton = document.createElement('button')
      delButton.classList.add('todo-list--item-button')
      delButton.innerText = 'Del'
      delButton.addEventListener('click', () => {
        if (confirm('Вы точно хотите удалить?')) {
          todoListArr = todoListArr.filter(item => item.id !== todoListItem.id)
          render()
          localsave()
        }
      })

      todolistLine.append(todoCheckBox, todoText, delButton)
      listContainer.append(todolistLine)
    })
  }

  if (localStorage.getItem('todoList')) {
    const todoListStore = localStorage.getItem('todoList')
    /** @type {TypeToDoItemParams[]} */
    const todoListStoreData = JSON.parse(todoListStore)

    todoListStoreData.forEach(item => {
      const todoListItem = new ToDoItem(item)
      todoListArr.push(todoListItem)
    })
    render()
  }

  const groupTodoItemsById = Object.groupBy(todoListArr, ({ id }) => id)

  const getId = () => {
    const id = Math.floor(Math.random() * 10000)
    if (Object.keys(groupTodoItemsById).length >= 9999) return
    if (Object.keys(groupTodoItemsById).includes('' + id)) {
      return getId()
    }
    return id
  }

  const todoCreate = (event) => {
    event.preventDefault()
    const text = input.value

    if (!text.length) return

    /** @type {TypeToDoItemParams} */
    const data = {
      complite: false,
      text,
      id: getId()
    }

    const todoItem = new ToDoItem(data)
    todoListArr.push(todoItem)
    render()
    localsave()
  }

  form.addEventListener('submit', todoCreate)
}

toListCreator('.todo-form', '#todo-text', '.todo-list')

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    a1: 4,
    b1: 5,
    c1: 6
  }
}

const { b: x, c, a, d: { a1, b1, c1 } } = obj

console.log(obj);
console.log(a);
console.log(x);
console.log(c);
console.log(a1);
console.log(b1);
console.log(c1);


