import ShopItem from "../compionents/Molekules/ShopItem.js"

class Cart {
  /** @type {import("../utils/api").ProductType[]} */
  products = []

  constructor () {
    this.item = document.createElement('div')
    this.widgetItem = document.createElement('span')
    this.item.classList.add('container')
    this.widgetItem.classList.add('widget')
    this.getProductStatus = this.getProductStatus.bind(this)
    this.removeItemCart = this.removeItemCart.bind(this)
    this.setItemCart = this.setItemCart.bind(this)
  }

  widget () {
    let count = this.products.length
    let price = this.products.reduce((price, item) => price += item.price, 0).toFixed(2)
    this.widgetItem.innerHTML = `<a href="#cart">${count} | ${price}</a>`
    return this.widgetItem
  }

  setItemCart (product) {
    this.products.push(product)
    this.widget()
  }

  removeItemCart (id) {
    this.products = this.products.filter(item => +item.id !== +id)
    this.widget()
    this.createCart()
  }

  getProductStatus (id) {
    return this.products.some(item => +item.id === +id)
  }

  createCart () {
    this.item.innerHTML = ''
    const title = document.createElement('h2')
    title.innerHTML = 'Корзана товаров'
    this.item.append(title)

    if (!this.products.length) {
      const p = document.createElement('p')
      p.innerHTML = 'Корзина пуста'
      this.item.append(p)
    } else {
      const cartItems = document.createElement("div")
      cartItems.classList.add('cart__items')
      this.products.forEach (product => {
        const item = new ShopItem(product).render()
        cartItems.append(item)
      })
      this.item.append(cartItems)
    }
  }

  render () {
    this.createCart()
    return this.item
  }
}

const cart = new Cart()
const widget = cart.widget()
const setItemCart = cart.setItemCart
const removeItemCart = cart.removeItemCart
const getProductStatus = cart.getProductStatus

export default cart
export {
  widget,
  setItemCart,
  removeItemCart,
  getProductStatus
}