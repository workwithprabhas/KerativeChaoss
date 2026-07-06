import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Wrap, Eyebrow, Button } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useSeo } from '../hooks/useSeo.js'

// slug -> the room/person title (keep in sync with People.jsx)
const TITLES = {
  women: 'For the women',
  men: 'For the men',
  teens: 'For the teens',
  storytellers: 'For the storytellers',
}

export default function ComingSoon() {
  const { slug } = useParams()
  const title = TITLES[slug] ?? 'This room'

  useSeo({
    title: `${title} — Stay tuned | SOCIO`,
    description: 'This SOCIO room is coming soon. Stay tuned.',
    path: `/belong/${slug ?? ''}`,
    noindex: true,
  })
  useScrollReveal()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <section className="relative z-[2] grid min-h-[100vh] place-items-center overflow-hidden px-7 pt-[120px] pb-[104px]">
      {/* breathing honey glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[620px] w-[620px] -translate-x-1/2 animate-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(212,154,74,.45), rgba(212,154,74,0) 62%)',
        }}
      />
      <Wrap className="relative z-[2] text-center">
        <Eyebrow className="rise-x inline-block mb-5">{title}</Eyebrow>
        <h1 className="rise-x font-display italic text-[clamp(3rem,12vw,8rem)] leading-[0.95] text-ink">
          Stay
          <br />
          tuned
        </h1>
        <p className="rise-x mx-auto mt-7 max-w-[40ch] text-[1.15rem] leading-[1.55] text-[#4a3d33]">
          We're still setting up this room. A space made just for{' '}
          <span className="font-hand text-[1.35rem] text-olive">{title.replace(/^For /, '')}</span>{' '}
          is on its way, come back soon.
        </p>
        <div className="rise-x mt-9 flex flex-wrap justify-center gap-[14px]">
          <Button as={Link} to="/who-belongs" variant="solid" className="cursor-pointer">
            Back to who belongs
          </Button>
          <Button as={Link} to="/" variant="ghost" className="cursor-pointer">
            Home
          </Button>
        </div>
      </Wrap>
    </section>
  )
}
