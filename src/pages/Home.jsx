import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Rooms from '../components/Rooms.jsx'
import People from '../components/People.jsx'
import Day from '../components/Day.jsx'
import Visit from '../components/Visit.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

// clean route -> the section to scroll to
const SECTION_BY_PATH = {
  '/rooms': '#rooms',
  '/who-belongs': '#people',
  '/a-day-here': '#day',
  '/visit': '#visit',
}

// section id -> the clean path the URL should show when it's on screen
const PATH_BY_SECTION = [
  { id: 'top', path: '/' },
  { id: 'rooms', path: '/rooms' },
  { id: 'people', path: '/who-belongs' },
  { id: 'day', path: '/a-day-here' },
  { id: 'visit', path: '/visit' },
]

export default function Home() {
  const location = useLocation()
  useScrollReveal()

  useEffect(() => {
    const selector = SECTION_BY_PATH[location.pathname]
    if (selector) {
      const el = document.querySelector(selector)
      if (el) {
        // navbar links pass state.smooth -> smooth scroll; everything else jumps
        const behavior = location.state?.smooth ? 'smooth' : 'auto'
        const id = setTimeout(() => el.scrollIntoView({ behavior, block: 'start' }), 60)
        return () => clearTimeout(id)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])

  // scroll-spy: update the URL (without a re-render) as each section passes the
  // middle of the viewport, so scrolling reflects the right clean route
  useEffect(() => {
    const sections = PATH_BY_SECTION.map((s) => ({
      ...s,
      el: document.getElementById(s.id),
    })).filter((s) => s.el)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const match = sections.find((s) => s.el === e.target)
            if (match && window.location.pathname !== match.path) {
              window.history.replaceState(null, '', match.path)
            }
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((s) => io.observe(s.el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <Rooms />
      <People />
      <Day />
      <Visit />
    </>
  )
}
