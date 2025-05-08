import { makeAutoObservable } from 'mobx'

class CashStore {
  cash = 5

  constructor() {
    makeAutoObservable(this)
  }

  setCash(num) {
    this.cash = this.cash + num
  }

  getCash(num) {
    this.cash = this.cash - num
  }
}

const cashStore = new CashStore()
export default cashStore