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

    const priceItem = document.createElement('span')
    priceItem.classList.add('item__price')
    priceItem.innerHTML = price

    const img = document.createElement('img')
    img.setAttribute('src', image)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('item__img')
    imgContainer.append(img)

    this.item.append(titleText, imgContainer, priceItem)
  }

  render() {
    this.createItem()
    return this.item
  }
}

export default ShopItem