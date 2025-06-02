import Button from "../compionents/Molekules/Button.js"
import { findById } from "../utils/api.js"

class Product {
  constructor (id) {
    this.id = id
    this.item = document.createElement('div')
    this.item.classList.add('container')
  }

  async createItem () {
    const data = await findById(this.id)

    const left = document.createElement('div')
    const right = document.createElement('div')

    left.innerHTML = `
      <div class="img">
        <img src="${data.image}" alt="${data.title}" />
      </div>
    `
    const category = document.createElement('h3')
    const productName = document.createElement('h2')
    const description = document.createElement('p')
    const price = document.createElement('p')
    const rating = document.createElement('div')

    category.innerHTML = data.category
    productName.innerHTML = data.title
    description.innerHTML = data.description
    price.innerHTML = data.price
    rating.innerHTML = `${data.rating.rate} (count: ${data.rating.count})`

    right.append(category, productName, description, price, rating, new Button(data).render())
    this.item.append(left, right)
  }

  render () {
    this.createItem()
    return this.item
  }
}

export default Product