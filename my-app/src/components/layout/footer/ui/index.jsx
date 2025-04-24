import { Link } from "react-router"
import { ListItem } from "../../header"


const Footer = () => {

  return (
    <footer>
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
    </footer>
  )
}

export default Footer