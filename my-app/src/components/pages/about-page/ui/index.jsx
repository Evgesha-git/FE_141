import { Link } from "react-router"

const AboutPage = () => {

  return (
    <div>
      <h1>Страница "О нас" в данный момент находится в разработке</h1>
      <p>Для ознакомления с товарами можно перейти на <Link to={'/catalog'}>страницу</Link> товаров</p>
    </div>
  )
}

export default AboutPage