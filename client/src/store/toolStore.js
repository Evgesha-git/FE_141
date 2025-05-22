import { makeAutoObservable } from 'mobx'
import Tool from '../tools/Tool'

class ToolStore {
  /** @type {Tool | null} */
  tool = null

  constructor () {
    makeAutoObservable(this)
  }

  setTool (tool) {
    this.tool = tool
  }

  setFillColor (color) {
    this.tool.fillColor = color
  }

  setStrokeColor(color) {
    this.tool.strokeColor = color
  }

  setLineWidth (width) {
    this.tool.lineWidth = width
  }
}

const toolStore = new ToolStore
export default toolStore