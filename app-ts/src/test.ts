
class App {
  static counter = 0

  public _a = 'a'
  protected b = 'b'
  private _c = 'c'

  set a(val) {
    this._a = val
  }

  get a() {
    return this._a
  }

  set c(val) {
    this._c = val
  }

  get c() {
    return this._c
  }

  static getCounter() {
    return this.counter
  }
}

const test = new App()

test.a = '123'
test._a = 'sdfsdf'

test.c = 'sdfsdf'


class Base extends App {
  constructor() {
    super()
  }

  getB() {
    return this.b
  }
}

class Cclass extends Base {
  constructor() {
    super()
  }

  getBprotected() {
    return this.b
  }
}

([]).map.call('test', (item) => console.log(item));
([]).map.apply('test2', [(item) => console.log(item)]);

const stringMap = ([]).map.bind('tes3')

console.log(stringMap(item => item));
