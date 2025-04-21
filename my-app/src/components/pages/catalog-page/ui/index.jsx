import { useEffect } from "react"
import { useCatalog } from "../../../shared/context/CatalogContext"
import ProductItem from "./components/ProductItem/ProductItem"

const CatalogPage = () => {
  const { catalog, findAll } = useCatalog()

  useEffect(() => {
    const fetchData = async () => {
      if (!catalog.length) {
        await findAll()
      }
    }

    fetchData()
  }, [])

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        {catalog.map(item => <ProductItem key={item.id.toString()} id={item.id} />)}
      </div>
    </div>
  )
}

export default CatalogPage