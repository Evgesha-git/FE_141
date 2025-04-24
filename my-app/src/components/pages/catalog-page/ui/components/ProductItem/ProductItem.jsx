import { useEffect, useState } from "react"
import { useCatalog } from "../../../../../shared/context/CatalogContext"
import styles from './ProductItem.module.css'
import { useNavigate } from "react-router"
import { useCart } from "../../../../../shared/context/CartContext"

const ProductItem = ({ id }) => {
  const { getProductById } = useCatalog()
  /** @type {[import("../../../../../shared/context/CatalogContext").catalogItem, () => void]} */
  const [product, setProduct] = useState(null)
  const { getCartStatus, removeItemCart, setCartItem } = useCart()

  const navigate = useNavigate()

  /**
   * 
   * @param {MouseEvent} e 
   */
  const buttonHandler = (e) => {
    e.stopPropagation()
    if (product.id) {
      if (getCartStatus(product.id)) {
        removeItemCart(product.id)
      } else {
        try {
          setCartItem(product)
        } catch (error) {
          enqueueSnackbar(error.message, { variant: 'error' })
        }
      }
    }
  }

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
  }, [id])

  return (
    <div className={styles.container} onClick={() => navigate(`/catalog/${id}`)}>
      {product &&
        <div className={styles.productInfo}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.image}>
            <img src={product.image} alt={product.description} />
          </div>
          <h5 className={styles.category}>{product.category}</h5>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.rate}>{product.rating.rate}</p>
          <button onClick={buttonHandler}>
            {getCartStatus(product.id) ? 'Удалить из корзины' : 'Добавить в корзину'}
          </button>
        </div>
      }
    </div>
  )
}

export default ProductItem