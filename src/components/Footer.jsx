import { Link } from 'react-router-dom'
import { Wrap } from './ui.jsx'
import { footerLogo } from '../assets/logo.js'

const links = [
  { to: '/rooms', label: 'Rooms' },
  { to: '/who-belongs', label: 'Who belongs' },
  { to: '/a-day-here', label: 'A day here' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/visit', label: 'Visit' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const linkClass = 'no-underline text-[#C9BCA6] text-[0.95rem] hover:text-ochre'

  return (
    <footer className="relative z-[2] bg-cocoa-2 text-[#C9BCA6] pt-16 pb-10">
      <Wrap>
        <div className="flex justify-between items-end gap-[30px] flex-wrap pb-10 border-b border-[rgba(201,188,166,0.18)] max-md:items-start">
          <div>
            <Link to="/">
              <img src={footerLogo} alt="SOCIO" className="h-[62px] w-auto block" />
            </Link>
            <div className="font-display italic text-ochre text-[1.2rem] mt-1.5">
              Not a cafe, it's an experience.
            </div>
          </div>
          <nav aria-label="Footer" className="flex gap-[26px] flex-wrap">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-between items-center gap-4 flex-wrap pt-6 text-[0.84rem] text-[#8a7d68]">
          <span>© {year} SOCIO. A second home.</span>
          <span>Made for the ones living beyond the 9-to-5.</span>
          <span>
            Designed &amp; developed by{' '}
            <span className="font-medium text-ochre">Kreative Chaoss</span>
          </span>
        </div>
      </Wrap>
    </footer>
  )
}
