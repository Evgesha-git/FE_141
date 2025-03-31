import Header from "./compionents/Layout/Header.js"
import Footer from "./compionents/Layout/Footer.js"
import Main from "./compionents/Layout/Main.js"

const root = document.getElementById('root')

const header = new Header().render()
const footer = new Footer().render()
const main = new Main().render()

root.append(header, main, footer)