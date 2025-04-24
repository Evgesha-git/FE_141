import { Link } from "react-router"
import ListItem from "./components/ListItem"
import { useCart } from "../../../shared/context/CartContext"


const Header = () => {
  const { cart } = useCart()

  return (
    <header>
      <div className="logo">
        <img src="#" alt="logo" />
      </div>
      <nav>
        <ul>
          <ListItem><Link to={'/catalog'}>Catalog</Link></ListItem>
          <ListItem><Link to={'/about'}>About</Link></ListItem>
          <ListItem><Link to={'/FAQ'}>FAQ</Link></ListItem>
        </ul>
      </nav>
      <div>
        {cart.length}
        |
        {cart.reduce((acc, item) => acc += item.price, 0)}
      </div>
    </header>
  )
}

export default Header