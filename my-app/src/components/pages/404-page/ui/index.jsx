import { Link } from "react-router"

const PageNotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Данная страница не найдена, обратитесь к администратору или <Link to={'/'}>вернитесь на главную страницу</Link></h2>
    </div>
  )
}

export default PageNotFound