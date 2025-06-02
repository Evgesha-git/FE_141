import { widget } from "../../pages/Cart.js"

class Header {
  constructor () {
    this.contaiener = document.createElement('div')
    this.contaiener.classList.add("container")

    this.widgetContainer = document.createElement('div')
    this.widgetContainer.classList.add("widget")
    this.widgetContainer.append(widget)

    this.header = document.createElement('header')
    this.header.innerHTML = `
      <div class="logo">
        <img src="" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Shop">Shop</a></li>
          <li><a href="#About">About</a></li>
        </ul>
      </nav>
    `

    this.header.append(this.widgetContainer)
    this.contaiener.append(this.header)
  }

  render () {
    return this.contaiener
  }
}

export default Header