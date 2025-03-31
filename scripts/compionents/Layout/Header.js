class Header {
  constructor () {
    this.header = document.createElement('header')
    this.header.innerHTML = `
      <div class="container">
        <div class="logo">
          <img src="" alt="logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Shop">Shop</a></li>
            <li><a href="#About">About</a></li>
          </ul>
        </nav>
        <div class="vidget">0 | 0</div>
      </div>
    `
  }

  render () {
    return this.header
  }
}

export default Header