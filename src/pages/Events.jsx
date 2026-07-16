import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrap, Eyebrow, Button } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useSeo } from '../hooks/useSeo.js'
import { eventPhotos } from '../data/eventPhotos.js'

// events SOCIO has hosted so far
const events = [
  { name: 'Birthday Parties', count: 69 },
  { name: 'Bridal Showers', count: 20 },
  { name: 'Get-togethers', count: 14 },
  { name: 'Workshops', count: 12 },
  { name: 'Kitty Parties', count: 5 },
  { name: 'Baby Showers', count: 4 },
  { name: 'Date Events', count: 3 },
  { name: 'Corporate Events', count: 2 },
]

// show friendly rounded-down counts: 69 -> "50+", 20 -> "20+", 14 -> "10+", 5 -> "5+"
const plus = (n) => {
  if (n >= 50) return `${Math.floor(n / 50) * 50}+`
  if (n >= 10) return `${Math.floor(n / 10) * 10}+`
  return `${n}+`
}

const total = events.reduce((sum, e) => sum + e.count, 0)
const max = Math.max(...events.map((e) => e.count))

export default function Events() {
  useScrollReveal()
  useSeo({
    title: 'Events — SOCIO Art and Cafe, Banjara Hills, Hyderabad',
    description:
      'Birthdays, bridal showers, workshops, kitty parties and more — the celebrations SOCIO has hosted in Banjara Hills, Hyderabad.',
    path: '/events',
  })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <section className="relative z-[2] pt-[140px] pb-[104px] max-md:pt-[120px] max-md:pb-[78px]">
      <Wrap>
        <div className="rise text-center max-w-[62ch] mx-auto mb-[54px]">
          <Eyebrow>Celebrations at SOCIO</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px]">
            The <span className="text-clay">events</span> we've hosted
          </h2>
          <p className="text-[1.12rem] text-[#4a3d33] mt-[18px] max-w-[54ch] mx-auto">
            At SOCIO we've hosted{' '}
            <b className="font-semibold text-ink">{plus(total)} celebrations</b> and counting,
            from first birthdays to bridal showers, workshops to quiet date evenings.
          </p>
        </div>

        {/* the numbers */}
        <div className="grid grid-cols-4 gap-[14px] max-lg:grid-cols-3 max-md:grid-cols-2 max-[520px]:grid-cols-1">
          {events.map((e) => (
            <div
              key={e.name}
              className="rise group flex flex-col justify-between rounded border-[1.5px] border-ink/20 bg-paper/50 p-6 transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-clay hover:bg-[#F3EAD9] hover:shadow-[0_16px_34px_-20px_rgba(120,60,30,0.55)]"
            >
              <div className="font-display text-[clamp(2.6rem,5vw,3.6rem)] leading-none text-clay">
                {plus(e.count)}
              </div>
              <h3 className="mt-3 text-[1.05rem] font-medium text-ink">{e.name}</h3>

              {/* proportion bar, so the scale reads at a glance */}
              <div
                className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink/10"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-ochre"
                  style={{ width: `${Math.round((e.count / max) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* button -> opens the event pictures on their own page */}
        {eventPhotos.length > 0 && (
          <div className="mt-12 text-center">
            <Button as={Link} to="/events/photos" variant="solid" className="cursor-pointer">
              Events happened at socio
            </Button>
          </div>
        )}

        <p className="rise text-center mt-12 font-display italic text-[1.4rem] text-ink">
          Every one of them started with someone asking, "can we do it at SOCIO?"
        </p>
      </Wrap>
    </section>
  )
}
