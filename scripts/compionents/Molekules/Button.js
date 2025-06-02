import { getProductStatus, removeItemCart, setItemCart } from '../../pages/Cart.js'

class Button {
  /**
   * 
   * @param {import('../../utils/api.js').ProductType} product 
   */
  constructor (product) {
    this.product = product
    this.button = document.createElement('button')
    this.button.classList.add('product__button')
    this.button.innerHTML = getProductStatus(this.product.id) ? 'Удалить' : 'Добавить в корзину'
  }

  addEvent () {
    this.button.addEventListener ('click', (e) => {
      e.stopPropagation()
      if (getProductStatus(this.product.id)) {
        removeItemCart(this.product.id)
        this.button.innerHTML = 'Добавить в корзину'
      } else {
        setItemCart(this.product)
        this.button.innerHTML = 'Удалить'
      }
    })
  }

  render () {
    this.addEvent()
    return this.button
  }
}

export default Button