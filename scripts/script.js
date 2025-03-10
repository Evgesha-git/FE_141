function Class1(par1, par2) {
  this.par1 = par1
  this.par2 = par2

  // this.method1 = () => {
  //   return this.par1 + this.par2
  // }
}

Class1.prototype.method1 = function () {
  return this.par1 + this.par2
}

function Class2(par1, par2, par3) {
  Class1.apply(this, [par1, par2])
  this.par3 = par3
  // this.method1 = () => {
  //   return this.par1 - this.par2
  // }
  // this.method2 = () => {
  //   return this.method1() + this.par3
  // }

  this.method1 = Class1.prototype.method1.bind(this)

  this.render = () => {
    const button = document.createElement('button')
    button.innerText = 'Нажми на меня'
    button.addEventListener('click', () => {      
      alert(this.method1())
    })
    document.body.append(button)
  }

  Object.defineProperties(this, {
    status: {
      enumerable: true,
      configurable: true,
      set: (val) => {
        if (typeof val !== 'number') {
          throw new TypeError('Invalid type')
        }
        status = val
      },
      get: () => +status
    }
  })
}

Class2.prototype = Object.create(Class1.prototype)

const test0 = new Class1(1, 2)
const test = new Class2(2, 4, 6)
test.render()

/**
 * 
 * @param {{title: string, content: string}} data 
 */
function Note(data) {
  this.data = data
}

Note.prototype.edit = function (newData) {
  // this.data = Object.assign(this.data, newData)
  this.data = { ...this.data, ...newData }
}

const note0 = new Note({ title: 'Заметка 0', content: 'Контент 0' })

const obj1 = {}

Object.defineProperty(obj1, 'name', {
  // value: 10,
  // writable: false,
  enumerable: true,
  set: (val) => {
    if (typeof val !== 'number') {
      throw new TypeError('Неверный тип данных')
    }
    name = val
  },
  get: () => name
})

const f1 = function () {
  console.log(this);
  
  return this.a + this.b
}

const obj2 = {
  a: 1,
  b: 2,
  m1: f1
}

const obj3 = {
  a: 10,
  b: 20,
  m1: f1.bind(obj2)
}

const str = 'Lorem ipsum dolor sit amet.'

// const arrChar = Array.prototype.map.call(str, (item) => item.toUpperCase())
// console.log(arrChar);

String.prototype.map = function (callback) {
  return Array.prototype.map.call(this, callback)
}

// const getArrChar = Array.prototype.map.bind(str)

// console.log(getArrChar((item) => item.toUpperCase()));

console.log(str.map((item) => item.toUpperCase()));

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];


if (!Object.groupBy) {
  Object.prototype.groupBy = function (arr, callback) {
    return arr.reduce((acc = {}, ...args) => {
      const key = callback(...args);
      acc[key] = acc[key] ?? []
      acc[key].push(args[0]);
      return acc;
    }, {})
  }
}

const groupInventory = Object.groupBy(inventory, (item) => item.name)

console.log(groupInventory);

function Dz7Constructor(params) {
  this.params = params
}

function ConstructorDOM (params) {
  Dz7Constructor.call(this, params)

  this.create = (tagName) => {
    return document.createElement(tagName)
  }
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {string} name 
 * @param {string|boolean} value 
 * @returns 
 */
ConstructorDOM.prototype.attr = function (element, name, value) {
  if (!value && typeof value !== 'boolean') {
    return element.getAttribute(name)
  } else {
    return element.setAttribute(name, value)
  }
}

const o1 = {
  name: 'Alex',
  age: 55
}

const o2 = {
  cours: 3
}

o2.__proto__ = o1