export default class Tool {
  /** @type {HTMLCanvasElement} */
  canvas = null
  /** @type {CanvasRenderingContext2D} */
  ctx = null

  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.destroyListen()
  }

  destroyListen() {
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
    this.canvas.onmousemove = null
  }

  set fillColor(color) {
    this.ctx.fillStyle = color
  }

  set lineWidth(width) {
    this.ctx.lineWidth = width
  }

  set strokeColor(color) {
    this.ctx.strokeStyle = color
  }
}