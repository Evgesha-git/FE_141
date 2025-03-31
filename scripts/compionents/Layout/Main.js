class Main {
  constructor () {
    this.main = document.createElement('main')
    this.routerHandler = this.routerHandler.bind(this)
    this.router()
  }

  async routerHandler () {
    this.main.innerHTML = ''
    let hash = window.location.hash.slice(1)

    if (!hash) hash = "Home"

    const module = await import(`../../pages/${hash}.js`)
    const item = new module.default().render()
    this.main.append(item)
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