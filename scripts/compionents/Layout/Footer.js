class Footer {
  constructor () {
    this.footer = document.createElement('footer')
    this.footer.innerHTML = `
      <h2>Footer</h2>
    `
  }

  render () {
    return this.footer
  }
}

export default Footer