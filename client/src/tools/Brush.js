import Tool from "./Tool";

export default class Brush extends Tool {
  mouseDown = false

  constructor(canvas, socket, id) {
    super(canvas, socket, id)
    this.listen()
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
  }

  mouseUpHandler(e) {
    this.mouseDown = false
    this.socket.send(JSON.stringify({
      method: 'drow',
      id: this.id,
      figure: {
        type: 'finish'
      }
    }))
  }

  mouseDownHandler(e) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
      this.socket.send(JSON.stringify({
        method: 'drow',
        id: this.id,
        figure: {
          type: 'brush',
          x: e.pageX - e.target.offsetLeft,
          y: e.pageY - e.target.offsetTop
        }
      }))
    }
  }

  draw(x, y) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }

  static staticDraw(ctx, x, y) {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}