import Brush from "./Brush";

export default class Eraser extends Brush {
  constructor (canvas, socket, id) {
    super(canvas, socket, id)
  }

  draw(x, y) {
    this.ctx.strokeStyle = 'white',
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }
}