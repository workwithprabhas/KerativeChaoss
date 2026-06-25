import { useEffect } from 'react'
import { Wrap, Eyebrow, Button } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const stats = [
  { n: '120k+', l: 'cups poured' },
  { n: '300+', l: 'evenings hosted' },
  { n: '4', l: 'years a home' },
  { n: '2.5k', l: 'regulars' },
]

const menu = [
  { name: 'House Pour-Over', note: 'single-origin, rotating', price: '₹180', tag: 'Coffee' },
  { name: 'Honey Sage Latte', note: 'our signature, lightly sweet', price: '₹220', tag: 'Signature' },
  { name: 'Clay Cold Brew', note: '18-hour steep, deep & smooth', price: '₹240', tag: 'Cold' },
  { name: 'Courtyard Breakfast', note: 'eggs, toast, seasonal fruit', price: '₹320', tag: 'Plate' },
  { name: 'Studio Cheesecake', note: 'baked fresh each morning', price: '₹190', tag: 'Sweet' },
  { name: 'The Founders’ Board', note: 'to share, for the long talks', price: '₹450', tag: 'Share' },
]

const features = [
  {
    title: 'Roasted with care',
    body: 'Small-batch beans, pulled by people who actually taste every cup before it reaches your table.',
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.7.6 1 1.4 1 2h6c0-.6.3-1.4 1-2a6 6 0 0 0-4-10Z" />
    ),
  },
  {
    title: 'A room for everyone',
    body: 'Work, gather, perform or simply pause, every corner is built to make you want to stay a little longer.',
    icon: <path d="M3 21c0-4 4-6 9-6s9 2 9 6M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  },
  {
    title: 'Open till late',
    body: 'Morning coffee to evening gigs, the door stays open for whoever needs the corner that’s quietly theirs.',
    icon: <path d="M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />,
  },
]

const testimonials = [
  {
    quote: 'It stopped being a cafe for me months ago. It’s where I go to feel like myself again.',
    name: 'Aarohi M.',
    role: 'regular since day one',
  },
  {
    quote: 'We ran our whole startup out of the founders’ table. Best coffee, better company.',
    name: 'Dev & Priya',
    role: 'builders',
  },
  {
    quote: 'My first open mic was on that little stage. They made room for me before anyone else did.',
    name: 'Kabir S.',
    role: 'poet',
  },
]

const Stars = () => (
  <div className="flex gap-1 text-ochre" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3l2.5 5 5.5.8-4 4 1 5.5L12 16l-5 2.3 1-5.5-4-4 5.5-.8z" />
      </svg>
    ))}
  </div>
)

export default function Landing() {
  useScrollReveal()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollTo = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-[140px] pb-[96px] max-md:pt-[120px]">
        <div
          aria-hidden="true"
          className="absolute -top-[160px] -right-[120px] h-[560px] w-[560px] pointer-events-none z-0 animate-breathe"
          style={{
            background:
              'radial-gradient(circle, rgba(212,154,74,.5), rgba(212,154,74,0) 62%)',
          }}
        />
        <Wrap className="relative z-[2]">
          <div className="grid grid-cols-2 items-center gap-[60px] max-md:grid-cols-1 max-md:gap-10">
            <div>
              <Eyebrow className="rise inline-block mb-5">Your corner in the chaos</Eyebrow>
              <h1 className="rise text-[clamp(2.8rem,6vw,5rem)]">
                Good coffee,
                <br />
                and a place to{' '}
                <span className="italic text-clay">belong.</span>
              </h1>
              <p className="rise mt-6 max-w-[44ch] text-[1.18rem] leading-[1.55] text-[#4a3d33]">
                SOCIO is a second home, small-batch coffee, slow mornings, and rooms made
                for the people who build, create and gather beyond the 9-to-5.
              </p>
              <div className="rise mt-9 flex flex-wrap gap-[14px]">
                <Button as="button" type="button" onClick={scrollTo('menu')} variant="solid" className="cursor-pointer">
                  See the menu
                </Button>
                <Button as="button" type="button" onClick={scrollTo('visit-cta')} variant="ghost" className="cursor-pointer">
                  Book a table
                </Button>
              </div>
            </div>

            <div className="rise relative">
              <img
                src="https://picsum.photos/seed/socio-cafe-hero/900/1000"
                alt="A warm corner inside SOCIO"
                className="aspect-[4/5] w-full rounded border-[1.5px] border-ink/15 object-cover shadow-[0_24px_50px_-28px_rgba(120,60,30,0.5)]"
              />
              <div className="absolute -bottom-5 -left-5 rounded border-[1.5px] border-ink/15 bg-paper px-5 py-3 shadow-[0_16px_34px_-20px_rgba(120,60,30,0.55)] max-md:left-2">
                <span className="font-hand text-[1.3rem] text-olive">open every day · till late</span>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* STATS */}
      <section className="relative z-[2] bg-paper-2 py-14">
        <Wrap>
          <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2">
            {stats.map((s) => (
              <div key={s.l} className="rise text-center">
                <div className="font-display text-[clamp(2rem,4vw,3rem)] text-clay leading-none">
                  {s.n}
                </div>
                <div className="mt-2 text-[0.86rem] uppercase tracking-[0.18em] text-muted">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* MENU */}
      <section id="menu" className="relative z-[2] py-[104px] max-md:py-[78px]">
        <Wrap>
          <div className="rise mb-[54px] max-w-[62ch] text-center mx-auto">
            <Eyebrow>From the counter</Eyebrow>
            <h2 className="mt-[14px] text-[clamp(2.1rem,5vw,3.4rem)]">
              Signature <span className="text-clay">pours</span> &amp; plates
            </h2>
            <p className="mx-auto mt-[18px] max-w-[54ch] text-[1.12rem] text-[#4a3d33]">
              A short, honest menu, made fresh, priced fair, served slow on purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
            {menu.map((m) => (
              <div
                key={m.name}
                className="rise group flex items-start justify-between gap-4 rounded border-[1.5px] border-ink/20 bg-paper/50 px-[22px] py-5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-clay hover:bg-[#F3EAD9]"
              >
                <div>
                  <span className="text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                    {m.tag}
                  </span>
                  <h3 className="mt-1 text-[1.35rem]">{m.name}</h3>
                  <p className="mt-1 text-[0.96rem] text-[#5a4d40]">{m.note}</p>
                </div>
                <span className="font-display text-[1.3rem] text-clay">{m.price}</span>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* WHY */}
      <section className="relative z-[2] bg-sage py-[104px] max-md:py-[78px]">
        <Wrap>
          <div className="rise mb-[54px] max-w-[60ch] text-center mx-auto">
            <Eyebrow className="!text-olive">Why people stay</Eyebrow>
            <h2 className="mt-[14px] text-[clamp(2.1rem,5vw,3.4rem)] text-[#33381f]">
              More than a cup of coffee.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
            {features.map((f) => (
              <div key={f.title} className="rise">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-olive/[0.16] text-olive">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-[1.5rem] text-[#2f3420]">{f.title}</h3>
                <p className="mt-2 text-[1.02rem] leading-[1.55] text-[#4c5234]">{f.body}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-[2] py-[104px] max-md:py-[78px]">
        <Wrap>
          <div className="rise mb-[54px] max-w-[60ch] text-center mx-auto">
            <Eyebrow>In their words</Eyebrow>
            <h2 className="mt-[14px] text-[clamp(2.1rem,5vw,3.4rem)]">
              Loved by the regulars.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-md:grid-cols-1">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rise m-0 flex flex-col rounded border-[1.5px] border-ink/15 bg-paper-2 p-7"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 font-display text-[1.2rem] italic leading-[1.45] text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-[0.95rem]">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="block text-muted">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Wrap>
      </section>

      {/* FINAL CTA */}
      <section id="visit-cta" className="relative z-[2] bg-cocoa py-[104px] text-[#ECE3D2] max-md:py-[78px]">
        <Wrap className="text-center">
          <Eyebrow className="rise inline-block !text-ochre">Come over</Eyebrow>
          <h2 className="rise mx-auto mt-[14px] max-w-[20ch] text-[clamp(2.3rem,5vw,3.8rem)] text-[#F4EBDA]">
            Your table is already warm.
          </h2>
          <p className="rise mx-auto mt-5 max-w-[46ch] font-display text-[1.25rem] italic text-ochre">
            Drop in for a coffee, or book the room for your evening.
          </p>
          <div className="rise mt-9 flex flex-wrap justify-center gap-[14px]">
            <Button as="button" type="button" variant="light" className="cursor-pointer">
              Get directions
            </Button>
            <Button
              as="button"
              type="button"
              variant="ghost"
              className="cursor-pointer !text-[#ECE3D2] !border-[rgba(236,227,210,0.4)] hover:!bg-[#ECE3D2] hover:!text-cocoa"
            >
              Book a table
            </Button>
          </div>
        </Wrap>
      </section>
    </>
  )
}
