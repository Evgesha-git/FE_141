import ShopItem from "../compionents/Molekules/ShopItem.js"
import { findAll } from "../utils/api.js"

class Shop {
  constructor() {
    this.item = document.createElement('div')
    this.item.classList.add('container')
  }

  async getContent() {
    const data = await findAll()
    if (!data) return

    const header = document.createElement('h2')
    header.classList.add('title')
    header.innerText = 'Shop'

    const items = document.createElement('div')
    items.classList.add('items')
    
    data.forEach(shopItemData => {
      const shopItem = new ShopItem(shopItemData).render()
      items.append(shopItem)
    })

    this.item.append(header, items)
  }

  render() {
    this.getContent()
    return this.item
  }
}

export default Shop