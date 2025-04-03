/**
 * @typedef {Object} ShopItemProps
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {{rate: number, count: number}} rating
 */

import Button from "./Button.js"

class ShopItem {
  /**
   * 
   * @param {ShopItemProps} props 
   */
  constructor(props) {
    this.item = document.createElement("div")
    this.item.classList.add("shop__item")
    /** @type {ShopItemProps} */
    this.props = props
  }

  createItem() {
    const {
      title,
      image,
      price
    } = this.props
    const titleText = document.createElement('h3')
    titleText.classList.add('item__title')
    titleText.innerHTML = title

    const priceItem = document.createElement('div')
    priceItem.classList.add('item__price')
    const priceText = document.createElement('span')
    priceText.innerHTML = price
    priceItem.append(new Button(this.props).render(), priceText)

    const img = document.createElement('img')
    img.setAttribute('src', image)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('item__img')
    imgContainer.append(img)

    this.item.append(titleText, imgContainer, priceItem)
    this.item.addEventListener('click', () => {
      window.open(`#Product_${this.props.id}`, '_self')
    })
  }

  render() {
    this.createItem()
    return this.item
  }
}

export default ShopItem