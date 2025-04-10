/**
 * number
 * string
 * boolean
 * undefined
 * object
 * Symbol
 * bigInt
 */

// let a: 1 | 2 | 'a'

// a = 34

const test = (x: string | string[] | null ) => {
  if (typeof x === 'object') {
    for (let a in x) {
      console.log(a);
    }
  } else {
    return x
  }
}

type User = {
  name: string,
  age: number
}

const colors: 'warning' | 'error' | 'success' | 'info' = "info"

type Colors = 'warning' | 'error' | 'success' | 'info'

const colors2: Colors = "success"

interface Admin {
  name: string,
  age: number,
  access: boolean,
  setAccess: (a: boolean) => void
}

type NewType = User | Admin

// const abracadabra: NewType = {
//   name: '',
//   age: 23,
//   access: true,

// }

const user: User = {
  age: 43,
  name: 'Alex'
}

const admin: Admin = {
  name: 'Petr',
  age: 33,
  access: false,
  setAccess: (a) => admin.access = a
}

class SuperAdmin implements Admin {
  access: boolean;
  age: number;
  name: string;
  
  constructor (name: string, age: number, access: boolean) {
    this.access = access
    this.age = age
    this.name = name
  }

  setAccess(a: boolean) {
    this.access = a
  }

  getAccess () {
    return this.access
  }
}

const admin2 = new SuperAdmin('ff', 45, true)

/**
 * Специальные типы:
 * any - не рекомендуется, обозначает любой тип (strin, number, undefined, ...)
 * unknown - неизвестный тип
 */

const arr: Array<number> = [1, 3]

const p: Promise<number[]> = Promise.all([])

type MyType<T> = {
  name: T,
  age: number,
  getName: () => T
}

const a1: MyType<Admin> = {
  name: {
    access: false,
    age: 44,
    name: 'Petr',
    setAccess: (a) => a1.name.access = a
  },
  age: 44,
  getName: () => a1.name
}

const a2: MyType<string> = {
  name: 'Alex',
  age: 22,
  getName: () => a2.name
}

class A {
  private name: string
  protected age: number
  public surName: string

  constructor (name: string, age: number, surName: string) {
    this.name = name
    this.age = age
    this.surName = surName
  }
}

class B extends A {
  getAll () {
    return this.age
  }
}

enum Season {
  Winter = 'Зима',
  Spring = 'Весна',
  Summer = 'Лето',
  Autumn = 'Осень'
}

const obj = {
  a: 1
}

Object.freeze(obj)

obj.a = 12

const current: Season = Season.Spring
console.log(current);
