import { Link } from "react-router"

const FAQPage = () => {

  return (
    <div>
      <h1>Страница популярных вопросов находится в разработке</h1>
      <p>Для ознакомления с товарами можно перейти на <Link to={'/catalog'}>страницу</Link> товаров</p>
    </div>
  )
}

export default FAQPage