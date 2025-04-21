import { useEffect, useState } from "react"
import { useCatalog } from "../../../../../shared/context/CatalogContext"
import styles from './ProductItem.module.css'

const ProductItem = ({ id }) => {
  const { getProductById } = useCatalog()
  /** @type {[import("../../../../../shared/context/CatalogContext").catalogItem, () => void]} */
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
  }, [id])

  return (
    <div className={styles.container}>
      {product && 
        <div className={styles.productInfo}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.image}>
            <img src={product.image} alt={product.description} />
          </div>
          <h5 className={styles.category}>{product.category}</h5>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.rate}>{product.rating.rate}</p>
        </div>
      }
    </div>
  )
}

export default ProductItem