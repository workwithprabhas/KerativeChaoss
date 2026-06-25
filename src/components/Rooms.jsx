import { Wrap, Eyebrow } from './ui.jsx'

const Lamp = ({ d, children }) => (
  <svg
    className="lamp absolute top-4 right-[18px] z-[1] text-muted transition-[color,transform] duration-[400ms] group-hover:text-ochre group-hover:scale-[1.12] group-focus-visible:text-ochre group-focus-visible:scale-[1.12]"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const rooms = [
  {
    span: 'col-span-7 row-span-2 max-md:col-span-12 max-md:row-span-1',
    tag: 'Create',
    title: 'The Art Studio',
    body: 'Add colour to your afternoon. Paint, make, try a food challenge, bring your interests, and let the kids loose on the things they love while you do.',
    icon: (
      <Lamp>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10c.7.6 1 1.4 1 2h6c0-.6.3-1.4 1-2a6 6 0 0 0-4-10Z" />
      </Lamp>
    ),
  },
  {
    span: 'col-span-5 max-md:col-span-12',
    tag: 'Perform',
    title: 'The Stage',
    body: 'A room of appreciation for musicians, and a rhyming rhythm for poets. Gigs, open mics, and talent finding its first crowd.',
    icon: (
      <Lamp>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </Lamp>
    ),
  },
  {
    span: 'col-span-5 max-md:col-span-12',
    tag: 'Gather',
    title: 'The Courtyard',
    body: 'Sit doing nothing, free of responsibilities. Soft music, a morning coffee, and gossip about the whole wide world.',
    icon: (
      <Lamp>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </Lamp>
    ),
  },
  {
    span: 'col-span-7 max-md:col-span-12',
    tag: 'Build',
    title: "The Founders' Table",
    body: "Run your startup's next chapter over coffee. A corner for the ones building things beyond the 9-to-5, side by side with people who get it.",
    icon: (
      <Lamp>
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
      </Lamp>
    ),
  },
  {
    span: 'col-span-4 max-md:col-span-12',
    tag: 'Belong',
    title: 'A Room for Two',
    body: 'Where couples learn the value of a perfect evening.',
    icon: (
      <Lamp>
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
      </Lamp>
    ),
  },
  {
    span: 'col-span-4 max-md:col-span-12',
    tag: 'Show',
    title: 'The Exhibition',
    body: "A wall for your passions and hobbies, and the work you've been quietly proud of.",
    icon: (
      <Lamp>
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M3 14l5-5 4 4 3-3 6 6" />
        <circle cx="8" cy="8" r="1.3" />
      </Lamp>
    ),
  },
  {
    span: 'col-span-4 max-md:col-span-12',
    tag: 'Reunite',
    title: "The Friends' Roof",
    body: 'For the gang and the reunions, bringing your childhood things back to life.',
    icon: (
      <Lamp>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-2 1.6-3.6 4-3.6 1.6 0 3 .9 3 2.6" />
      </Lamp>
    ),
  },
]

export default function Rooms() {
  return (
    <section id="rooms" className="relative z-[2] bg-paper-2 py-[104px] max-md:py-[78px]">
      <Wrap>
        {/* one roof over all the rooms */}
        <svg
          className="rise block w-full h-12 text-ink mb-2 opacity-80"
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

        <div className="rise text-center max-w-[62ch] mx-auto mb-[54px]">
          <Eyebrow>All under one roof</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px]">
            The <span className="text-clay">rooms</span> of SOCIO
          </h2>
          <p className="text-[1.12rem] text-[#4a3d33] mt-[18px] max-w-[54ch] mx-auto">
            One house, many rooms, each one waiting for a different part of you. Run your cursor over a room and watch it light up.
          </p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[minmax(140px,auto)] gap-[14px]">
          {rooms.map((r) => (
            <div
              key={r.title}
              tabIndex={0}
              aria-label={r.title}
              className={`rise group relative flex flex-col justify-between overflow-hidden cursor-default rounded border-[1.5px] border-ink/30 bg-paper/50 px-[22px] pt-[22px] pb-5 outline-none transition-[border-color,background-color,transform,box-shadow] duration-300 hover:border-clay hover:bg-[#F3EAD9] hover:-translate-y-1 hover:shadow-[0_16px_34px_-20px_rgba(120,60,30,0.55)] focus-visible:border-clay focus-visible:bg-[#F3EAD9] focus-visible:-translate-y-1 focus-visible:shadow-[0_16px_34px_-20px_rgba(120,60,30,0.55)] ${r.span}`}
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
              {r.icon}
              <span className="relative z-[1] text-[0.68rem] tracking-[0.18em] uppercase text-muted">
                {r.tag}
              </span>
              <div className="relative z-[1]">
                <h3 className="text-[1.5rem] mt-[10px]">{r.title}</h3>
                <p className="text-[0.96rem] text-[#5a4d40] mt-[10px] leading-[1.5]">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="rise text-center mt-10 font-display italic text-[1.4rem] text-ink">
          A room of acceptance, for who you are, no judgement, just like minds.
        </p>
      </Wrap>
    </section>
  )
}
