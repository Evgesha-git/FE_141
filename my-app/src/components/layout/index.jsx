import CartProvider from "../shared/context/CartContext"
import Footer from "./footer"
import Header from "./header"
import Main from "./main/ui"

const Layout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </>
  )
}

export default Layout