import { makeAutoObservable } from "mobx";

class CanvasState {
  /** @type {HTMLCanvasElement|null} */
  canvas = null

  constructor () { 
    makeAutoObservable(this)
  }

  setCanvas (canvas) {
    this.canvas = canvas
  }
}

const canvasState = new CanvasState()
export default canvasState