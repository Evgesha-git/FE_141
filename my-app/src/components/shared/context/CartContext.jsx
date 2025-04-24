import { createContext, useContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const setCartItem = (product) => {
    if (getCartStatus(product.id)) {
      throw new Error('Такой товар уже есть в корзине')
    }

    setCart([...cart, product])
  }

  const removeItemCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const getCartStatus = (id) => cart.some(item => item.id === id)

  const clear = () => setCart([])

  return (
    <CartContext.Provider value={{
      cart,
      setCartItem,
      removeItemCart,
      getCartStatus,
      clear
    }}>
      {children}
    </CartContext.Provider>
  )
}

/**
 * 
 * @returns {{
 * cart: import("./CatalogContext").catalogItem[],
 * setCartItem: (product: import("./CatalogContext").catalogItem) => void,
 * removeItemCart: (id: number) => void,
 * getCartStatus: (id: number) => boolean,
 * clear: () => void
 * }}
 */
export const useCart = () => {
  return useContext(CartContext)
}

export default CartProvider