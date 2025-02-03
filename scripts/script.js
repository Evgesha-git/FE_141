const adress = (url) => {
  const regExt = /(https?:\/\/[a-z][a-z0-9]+(?:\.[a-z0-9]+)*\.[a-z]{2,11})(\/(?:[^#\?\s])+)?(\?[^#]+)?(#\w+)?/gi;
  const group = regExt.exec(url) || [];
  return [...group].filter((_, index) => index !== 0)
}

console.log(adress('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));

const Lamp = function (power, voltage) {
  this.power = power;
  this.voltage = voltage;
  this.on = false;
  this.lifeTime = 400; //секунды
  this.curentLifeTime = 0; //секунды
  this.timerStop = false
  this.lampNumber = ++Lamp.counter

  /**
   * lamp1 = Lamp.conter === 1
   * Lamp.counter === 1
   * lamp2 = Lapm.conunter === 2
   * Lamp.counter === 2
   */

  /**
   * Инкапсуляция - обеспечение безопасного доступа к приватным свойствам для чтения или записи
   */

  const timerLamp = () => {
    let timerId = setInterval(() => {
      if (this.lifeTime === this.curentLifeTime) {
        this.on === false
        clearInterval(timerId)
      } else {
        this.curentLifeTime += 1
        if (this.timerStop) {
          clearInterval(timerId)
        }
      }
    }, 1000)
  }

  this.onToggle = () => {
    if (this.lifeTime !== this.curentLifeTime) {
      this.on = !this.on
      if (this.on) {
        timerLamp()
        this.timerStop = false
      } else {
        this.timerStop = true
      }
    }
  }

  this.getStatus = () => {
    if (this.on) {
      return 'Лампа включена'
    } else {
      return 'Лампа выключена'
    }
  }

  this.getPowerConsumption = () => {
    const time = this.curentLifeTime / 60 / 60
    return this.power * time
  }

  this.getInfo = () => {
    return `Лампочка ${this.lampNumber} мощностью ${this.power} и напряжением сети ${this.voltage}`
  }
}

Lamp.counter = 0

const lamp1 = new Lamp(60, 220)
const lamp2 = new Lamp(80, 220)

const psevdoConstructor = (name, age) => ({
  name,
  age,
  getName: () => name
})

const user1 = psevdoConstructor("alex", 22)
const user2 = psevdoConstructor("Petr", 22)

function Test (test1, test2) {
  this.test1 = test1;
  this.test2 = test2;
  const self = this;

  function test3 () {
    console.log(this);
    return self.test1 + self.test2
  }

  this.test4 = function () {
    return test3() ** 3
  }

  this.test5 = function () {
    return test3() ** 5
  }
}

Test.info = function () {
  return `Данный конструктор объекта нужет только для того, что бы`
}

const test1 = new Test(1, 4)