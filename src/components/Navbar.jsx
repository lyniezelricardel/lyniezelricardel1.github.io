import { Link, NavLink, useLocation } from 'react-router-dom'
import { headerSocials, workLinks } from '../data/navigation.js'
import NavDropdown from './NavDropdown.jsx'
import SocialLinks from './SocialLinks.jsx'

function navLinkClass({ isActive }) {
  return isActive ? 'active' : undefined
}

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="brand" to="/">
        Lyniezel
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>
        </li>
        <NavDropdown links={workLinks} active={pathname === '/work'} />
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      <SocialLinks className="header-socials" links={headerSocials} />
    </nav>
  )
}
