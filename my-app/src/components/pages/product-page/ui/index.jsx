import { useParams } from "react-router"
import { useCatalog } from "../../../shared/context/CatalogContext"
import { useEffect, useState } from "react"
import { useSnackbar } from "notistack"
import { useCart } from "../../../shared/context/CartContext"

const ProductPage = () => {
  const [loading, setLoading] = useState(true)
  /** @type {[import("../../../shared/context/CatalogContext").catalogItem, () => void]} */
  const [product, setProduct] = useState({})

  const { id } = useParams()
  const { getProductById } = useCatalog()
  const { getCartStatus, removeItemCart, setCartItem } = useCart()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const getProduct = async () => {
      if (!id) return
      try {
        const product = await getProductById(+id)
        setProduct(product)
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  const buttonHandler = () => {
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

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <p>{product.category}</p>
        <h2>{product.title}</h2>
        <div>
          <span>{product.rating.rate}</span>
          <span>{product.rating.count}</span>
        </div>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={buttonHandler}>
          {getCartStatus(product.id) ? 'Удалить из корзины' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  )
}

export default ProductPage