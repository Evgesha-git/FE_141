import { makeAutoObservable } from "mobx"

class UserStore {
  username = ''
  socket = null
  sessionID = ''

  constructor () {
    makeAutoObservable(this)
  }

  setUserName (userName) {
    this.username = userName
  }

  setSocket (socket) {
    this.socket = socket
  }

  setSessionID(id) {
    this.sessionID = id
  }
}

const userStore = new UserStore()
export default userStore