import cart from "../../pages/Cart.js"

class Main {
  constructor () {
    this.main = document.createElement('main')
    this.routerHandler = this.routerHandler.bind(this)
    this.router()
  }

  async routerHandler () {
    this.main.innerHTML = ''
    let hash = window.location.hash.slice(1)
    let id = null

    if (!hash) hash = "Home"

    if (hash.indexOf('_') !== -1) {
      let index = hash.indexOf('_')
      id = hash.slice(index + 1)
      hash = hash.slice(0, index)
    }

    if (hash === 'cart') {
      const item = cart.render()
      this.main.append(item)
    } else {
      const module = await import(`../../pages/${hash}.js`)
      const item = new module.default(id).render()
      this.main.append(item)
    }
    
  }

  router () {
    // вернуть контекст можно двумя способами 1) использование колбе функции, 2) метод bind
    // window.addEventListener('hashchange', () => this.routerHandler())
    window.addEventListener('hashchange', this.routerHandler)
    window.addEventListener('load', this.routerHandler)
  }

  render () {
    return this.main
  }
}

export default Main