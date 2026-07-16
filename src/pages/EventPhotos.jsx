import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrap, Eyebrow, Button } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useSeo } from '../hooks/useSeo.js'
import { eventPhotos } from '../data/eventPhotos.js'

export default function EventPhotos() {
  useScrollReveal()
  useSeo({
    title: 'Event Photos — SOCIO Art and Cafe, Banjara Hills, Hyderabad',
    description:
      'Photos from the birthdays, bridal showers, workshops and get-togethers hosted at SOCIO, Banjara Hills, Hyderabad.',
    path: '/events/photos',
  })
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <section className="relative z-[2] pt-[140px] pb-[104px] max-md:pt-[120px] max-md:pb-[78px]">
      <Wrap>
        <div className="rise text-center max-w-[62ch] mx-auto mb-[54px]">
          <Eyebrow>Events at SOCIO</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px]">
            The <span className="text-clay">celebrations</span>, in pictures
          </h2>
          <p className="text-[1.12rem] text-[#4a3d33] mt-[18px] max-w-[54ch] mx-auto">
            Birthdays, bridal showers, workshops and get-togethers — the evenings this room
            has held.
          </p>
        </div>

        {eventPhotos.length > 0 ? (
          <div className="grid grid-cols-3 auto-rows-[220px] gap-[14px] max-md:grid-cols-2 max-[520px]:grid-cols-1">
            {eventPhotos.map((src, i) => (
              <figure
                key={src}
                className={`rise-x group relative m-0 overflow-hidden rounded border-[1.5px] border-ink/15 bg-paper-2 ${
                  i % 4 === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`Event at SOCIO, Banjara Hills, Hyderabad — photo ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-center font-display italic text-[1.3rem] text-muted">
            Photos coming soon.
          </p>
        )}

        <div className="mt-12 flex justify-center">
          <Button as={Link} to="/events" variant="ghost" className="cursor-pointer">
            Back to the events
          </Button>
        </div>
      </Wrap>
    </section>
  )
}
