import { Link } from "react-router"

const IndexPage = () => {

  return (
    <div>
      <h1>Добро пожаловать в каталог</h1>
      <p>Для ознакомления с товарами можно перейти на <Link to={'/catalog'}>страницу</Link> товаров</p>
    </div>
  )
}

export default IndexPage