import { useEffect } from 'react'
import { Wrap, Eyebrow } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

// load every image dropped into src/assets/imagegallery (add more anytime)
const modules = import.meta.glob(
  '../assets/imagegallery/*.{JPG,jpg,jpeg,JPEG,png,PNG,webp}',
  { eager: true, query: '?url', import: 'default' }
)
const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], i) => ({
    src,
    alt: `SOCIO gallery photo ${i + 1}`,
    // give a few tiles extra height for a loose gallery-wall feel
    span: i % 4 === 0 ? 'row-span-2' : '',
  }))

export default function Gallery() {
  useScrollReveal()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
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
              className={`rise-x group relative m-0 overflow-hidden rounded border-[1.5px] border-ink/15 bg-paper-2 ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
