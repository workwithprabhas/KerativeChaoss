import { useState } from 'react'
import { Wrap, Eyebrow } from './ui.jsx'

// load every photo dropped into src/assets/artstudio
const studioModules = import.meta.glob(
  '../assets/artstudio/*.{JPG,jpg,jpeg,JPEG,png,PNG,webp}',
  { eager: true, query: '?url', import: 'default' }
)
const studioPhotos = Object.entries(studioModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

const Chevron = ({ left }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={left ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
  </svg>
)

// a small "Stay tuned" pill for the top-right corner of the not-ready rooms
const StayTuned = () => (
  <span className="absolute top-3 right-3 z-[1] rounded-full border border-clay/40 bg-paper/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-clay">
    Stay tuned
  </span>
)

const rooms = [
  {
    studio: true,
    span: 'col-span-7 row-span-2 max-md:col-span-12 max-md:row-span-1',
    tag: 'Create',
    title: 'The Art Studio',
    body: 'Add colour to your afternoon. Paint, make, try a food challenge, bring your interests, and let the kids loose on the things they love while you do.',
  },
  { span: 'col-span-5 max-md:col-span-12', tag: 'Perform', title: 'The Stage', body: 'A room of appreciation for musicians, and a rhyming rhythm for poets. Gigs, open mics, and talent finding its first crowd.' },
  { span: 'col-span-5 max-md:col-span-12', tag: 'Gather', title: 'The Courtyard', body: 'Sit doing nothing, free of responsibilities. Soft music, a morning coffee, and gossip about the whole wide world.' },
  { span: 'col-span-7 max-md:col-span-12', tag: 'Build', title: "The Founders' Table", body: "Run your startup's next chapter over coffee. A corner for the ones building things beyond the 9-to-5, side by side with people who get it." },
  { span: 'col-span-4 max-md:col-span-12', tag: 'Belong', title: 'A Room for Two', body: 'Where couples learn the value of a perfect evening.' },
  { span: 'col-span-4 max-md:col-span-12', tag: 'Show', title: 'The Exhibition', body: "A wall for your passions and hobbies, and the work you've been quietly proud of." },
  { span: 'col-span-4 max-md:col-span-12', tag: 'Reunite', title: "The Friends' Roof", body: 'For the gang and the reunions, bringing your childhood things back to life.' },
]

function ArtStudioCard({ span, tag, title, body }) {
  const [i, setI] = useState(0)
  const n = studioPhotos.length
  const go = (delta) => (e) => {
    e.preventDefault()
    setI((prev) => (prev + delta + n) % n)
  }

  return (
    <div
      className={`rise-x group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded border-[1.5px] border-ink/30 bg-cocoa max-md:min-h-[360px] ${span}`}
    >
      {studioPhotos.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${title}, photo ${idx + 1}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover object-[center_25%] transition-opacity duration-500 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/35 to-cocoa/0" />

      <div className="relative z-[1] p-[22px]">
        <span className="text-[0.68rem] tracking-[0.18em] uppercase text-paper/70">{tag}</span>
        <h3 className="text-[1.7rem] text-paper mt-[8px]">{title}</h3>
        <p className="text-[0.96rem] text-paper/85 mt-[8px] leading-[1.5] max-w-[44ch]">{body}</p>
      </div>

      {/* controls grouped together, bottom-right corner */}
      <div className="absolute bottom-4 right-4 z-[2] flex items-center gap-3">
        <div className="flex gap-1.5">
          {studioPhotos.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setI(idx)
              }}
              aria-label={`Go to photo ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === i ? 'w-5 bg-ochre' : 'w-1.5 bg-paper/50 hover:bg-paper/80'}`}
            />
          ))}
        </div>
        {n > 1 && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={go(-1)}
              aria-label="Previous photo"
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/30 bg-paper/15 text-paper backdrop-blur-sm transition hover:bg-paper/30 cursor-pointer"
            >
              <Chevron left />
            </button>
            <button
              type="button"
              onClick={go(1)}
              aria-label="Next photo"
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/30 bg-paper/15 text-paper backdrop-blur-sm transition hover:bg-paper/30 cursor-pointer"
            >
              <Chevron />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Rooms() {
  return (
    <section id="rooms" className="relative z-[2] bg-paper-2 py-[104px] max-md:py-[78px]">
      <Wrap>
        {/* one roof over all the rooms */}
        <svg
          className="rise-x block w-full h-12 text-ink mb-2 opacity-80"
          viewBox="0 0 1120 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M2 58 L2 30 L180 30 L260 4 L340 30 L1118 30 L1118 58" />
          <path d="M260 4 L260 30" strokeWidth="1.4" opacity=".5" />
        </svg>

        <div className="rise-x text-center max-w-[62ch] mx-auto mb-[54px]">
          <Eyebrow>All under one roof</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px]">
            The <span className="text-clay">rooms</span> of SOCIO
          </h2>
          <p className="text-[1.12rem] text-[#4a3d33] mt-[18px] max-w-[54ch] mx-auto">
            One house, many rooms, each one waiting for a different part of you. Run your cursor over a room and watch it light up.
          </p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[minmax(140px,auto)] gap-[14px]">
          {rooms.map((r) =>
            r.studio ? (
              <ArtStudioCard key={r.title} {...r} />
            ) : (
              <div
                key={r.title}
                tabIndex={0}
                aria-label={r.title}
                className={`rise-x group relative flex flex-col justify-between overflow-hidden cursor-default rounded border-[1.5px] border-ink/30 bg-paper/50 px-[22px] pt-[22px] pb-5 outline-none transition-[border-color,background-color,transform,box-shadow] duration-300 hover:border-clay hover:bg-[#F3EAD9] hover:-translate-y-1 hover:shadow-[0_16px_34px_-20px_rgba(120,60,30,0.55)] focus-visible:border-clay focus-visible:bg-[#F3EAD9] focus-visible:-translate-y-1 focus-visible:shadow-[0_16px_34px_-20px_rgba(120,60,30,0.55)] ${r.span}`}
              >
                {/* lamp glow, off by default */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{
                    background:
                      'radial-gradient(120% 120% at 78% 18%, rgba(212,154,74,.42), rgba(212,154,74,0) 60%)',
                  }}
                />
                <StayTuned />
                <span className="relative z-[1] text-[0.68rem] tracking-[0.18em] uppercase text-muted">
                  {r.tag}
                </span>
                <div className="relative z-[1]">
                  <h3 className="text-[1.5rem] mt-[10px]">{r.title}</h3>
                  <p className="text-[0.96rem] text-[#5a4d40] mt-[10px] leading-[1.5]">{r.body}</p>
                </div>
              </div>
            )
          )}
        </div>

        <p className="rise-x text-center mt-10 font-display italic text-[1.4rem] text-ink">
          A room of acceptance, for who you are, no judgement, just like minds.
        </p>
      </Wrap>
    </section>
  )
}
