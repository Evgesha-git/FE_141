class Home {
  constructor () {
    this.item = document.createElement('div')
    this.item.classList.add('container')
    this.item.innerHTML = `
      <h2>Home</h2>
    `
  }

  render () {
    return this.item
  }
}

export default Home