// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1>Wave</h1>
    </div>
    <ul className="nav-ul-cont">
      <li className="nav-item">
        <Link className="nav-item-text" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-item-text" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-item-text" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
