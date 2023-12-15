import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="header__container">
      <h1 className="header__title">
        Rick & Morty <span className="span_title">Wiki</span>
      </h1>
      <nav>
        <ul className="header__options-container">
          <li className="header__subtitle">
            <Link to="/">Home</Link>
          </li>
          <li className="header__subtitle">
            <Link to="/">Characters</Link>
          </li>
          <li className="header__subtitle">
            <Link to="/">Location</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
