import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavDropdown({ links, active }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const { pathname, hash } = useLocation()

  // Close the menu whenever the visitor navigates to another page or section.
  useEffect(() => {
    setIsOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleMouseDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <li className="dropdown" ref={containerRef}>
      <button
        ref={buttonRef}
        id="dropdownBtn"
        className={`dropdown-btn${active ? ' active' : ''}`}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdownMenu"
        onClick={() => setIsOpen((open) => !open)}
      >
        My Work{' '}
        <span id="dropdownArrow" className="dropdown-arrow" aria-hidden="true">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      <ul id="dropdownMenu" className={`dropdown-menu${isOpen ? ' show' : ''}`}>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
