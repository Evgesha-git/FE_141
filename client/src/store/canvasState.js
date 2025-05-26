import { makeAutoObservable } from "mobx";

class CanvasState {
  /** @type {HTMLCanvasElement|null} */
  canvas = null
  undoList = []
  redoList = []

  constructor() {
    makeAutoObservable(this)
  }

  setCanvas(canvas) {
    this.canvas = canvas
  }

  setRedo(data) {
    this.redoList.push(data)
  }

  setUndo(data) {
    this.undoList.push(data)
  }

  undo() {
    let ctx = this.canvas.getContext('2d')
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop()
      this.redoList.push(this.canvas.toDataURL())
      const img = new Image()
      img.src = dataUrl
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      }
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  redo() {
    let ctx = this.canvas.getContext('2d')
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop()
      this.undoList.push(this.canvas.toDataURL())
      const img = new Image()
      img.src = dataUrl
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      }
    }
  }
}

const canvasState = new CanvasState()
export default canvasState