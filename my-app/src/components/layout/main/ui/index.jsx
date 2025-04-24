import { Routes, Route } from "react-router"
import PageNotFound from "../../../pages/404-page"
import IndexPage from "../../../pages/index-page"
import AboutPage from "../../../pages/about-page"
import FAQPage from "../../../pages/faq-page"
import CatalogPage from "../../../pages/catalog-page"
import { ContextProvider } from "../../../shared/context/CatalogContext"
import ProductPage from "../../../pages/product-page"

const Main = () => {
  return (
    <ContextProvider>
      <main>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </ContextProvider>
  )
}

export default Main