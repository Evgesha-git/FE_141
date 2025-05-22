import Tool from "./Tool"

export default class Circle extends Tool {
  mouseDown = false
  startX = null
  startY = null

  constructor(canvas) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
  }

  mouseUpHandler(e) {
    this.mouseDown = false
  }

  mouseDownHandler(e) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    this.startX = e.pageX - e.target.offsetLeft
    this.startY = e.pageY - e.target.offsetTop
    this.saved = this.canvas.toDataURL()
    
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      const currentX = e.pageX - e.target.offsetLeft
      const currentY = e.pageY - e.target.offsetTop
      const width = currentX - this.startX
      const height = currentY - this.startY
      const r = Math.sqrt(width ** 2 + height ** 2)
      this.draw(this.startX, this.startY, r)
    }
  }

  draw(x, y, r) {
    const img = new Image()
    img.src = this.saved
    img.onload = () => {      
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.arc(x, y, r, 0, 2 * Math.PI)
      this.ctx.fill()
      this.ctx.stroke()
    }
  }
}