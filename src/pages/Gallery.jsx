import { useEffect } from 'react'
import { Wrap, Eyebrow } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/* Placeholder photos, swap the `src` values for your own SOCIO images.
 * `span` gives a few tiles extra height for a loose, gallery-wall feel. */
const photos = [
  { src: 'https://picsum.photos/seed/socio-studio/800/900', alt: 'The art studio', span: 'row-span-2' },
  { src: 'https://picsum.photos/seed/socio-stage/800/600', alt: 'Live on the stage' },
  { src: 'https://picsum.photos/seed/socio-coffee/800/600', alt: 'Morning coffee in the courtyard' },
  { src: 'https://picsum.photos/seed/socio-gather/800/600', alt: 'Friends gathering' },
  { src: 'https://picsum.photos/seed/socio-paint/800/900', alt: 'Painting together', span: 'row-span-2' },
  { src: 'https://picsum.photos/seed/socio-poetry/800/600', alt: 'Poetry night' },
  { src: 'https://picsum.photos/seed/socio-table/800/600', alt: "The founders' table" },
  { src: 'https://picsum.photos/seed/socio-evening/800/600', alt: 'An evening for two' },
  { src: 'https://picsum.photos/seed/socio-wall/800/600', alt: 'The exhibition wall' },
]

export default function Gallery() {
  useScrollReveal()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative z-[2] pt-[140px] pb-[104px] max-md:pt-[120px] max-md:pb-[78px]">
      <Wrap>
        <div className="rise text-center max-w-[62ch] mx-auto mb-[54px]">
          <Eyebrow>Moments at SOCIO</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px]">
            The <span className="text-clay">gallery</span>
          </h2>
          <p className="text-[1.12rem] text-[#4a3d33] mt-[18px] max-w-[54ch] mx-auto">
            A wall of the small things, the afternoons made, the evenings shared, the corners that became someone's second home.
          </p>
        </div>

        <div className="grid grid-cols-3 auto-rows-[220px] gap-[14px] max-md:grid-cols-2 max-[520px]:grid-cols-1">
          {photos.map((p) => (
            <figure
              key={p.src}
              className={`rise-x group relative m-0 overflow-hidden rounded border-[1.5px] border-ink/15 bg-paper-2 ${
                p.span ?? ''
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-cocoa/80 to-transparent px-4 pb-3 pt-10 text-[0.9rem] font-medium text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {p.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
