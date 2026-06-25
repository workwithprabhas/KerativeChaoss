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

export default function Home() {
  const location = useLocation()
  useScrollReveal()

  useEffect(() => {
    const selector = SECTION_BY_PATH[location.pathname]
    if (selector) {
      const el = document.querySelector(selector)
      if (el) {
        const id = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60)
        return () => clearTimeout(id)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

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
