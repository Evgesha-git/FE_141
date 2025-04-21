import { Link } from "react-router"
import ListItem from "./components/ListItem"


const Header = () => {

  return (
    <header>
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <nav>
        <ul>
          <ListItem><Link to={'/catalog'}>Catalog</Link></ListItem>
          <ListItem><Link to={'/about'}>About</Link></ListItem>
          <ListItem><Link to={'/FAQ'}>FAQ</Link></ListItem>
        </ul>
      </nav>
    </header>
  )
}

export default Header