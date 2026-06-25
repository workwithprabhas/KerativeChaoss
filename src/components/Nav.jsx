import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLogo } from '../assets/logo.js'

// clean routes, each scrolls to its section on the home page (no # in the URL)
const links = [
  { to: '/rooms', label: 'Rooms' },
  { to: '/who-belongs', label: 'Who belongs' },
  { to: '/a-day-here', label: 'A day here' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav-container" aria-label="Primary">
      <Link className="logo" to="/" aria-label="SOCIO, home" onClick={close}>
        <img src={navLogo} alt="SOCIO" />
      </Link>

      {/* centered links, desktop */}
      <div className="nav-center">
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={close}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* button, desktop */}
      <div className="nav-right">
        <Link className="get-started-btn" to="/visit" onClick={close}>
          Book a table
        </Link>
      </div>

      {/* hamburger, mobile */}
      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* dropdown, mobile */}
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link className="get-started-btn" to="/visit" onClick={close}>
            Book a table
          </Link>
        </div>
      )}
    </nav>
  )
}
