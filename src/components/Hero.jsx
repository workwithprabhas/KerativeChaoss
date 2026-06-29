import { Wrap, Button } from './ui.jsx'

// served from /public so the URL is stable (used by the VideoObject SEO schema)
const HERO_VIDEO = '/hero-banner.mp4'

export default function Hero() {
  const smoothTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-start overflow-hidden bg-cocoa pt-[150px] pb-24 max-[520px]:min-h-[80vh] max-[520px]:pt-[120px] max-[520px]:pb-[72px]"
    >
      {/* video banner background */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* light scrim so the video stays bright but text is still readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-cocoa/40 via-cocoa/20 to-cocoa/55"
      />

      <Wrap className="relative z-[2] text-center">
        <h1
          className="rise text-[clamp(3.2rem,9.5vw,7.2rem)] text-[#F4EBDA] [text-shadow:0_2px_18px_rgba(28,20,15,0.55)]"
          style={{ fontOpticalSizing: 144 }}
        >
          It was never<br />just a cafe.<br />It's a{' '}
          <span className="relative italic text-clay">
            home.
            <span className="hero-underline absolute left-0 right-0 bottom-[0.08em] h-[0.09em] rounded-[2px] bg-ochre origin-left scale-x-0 animate-underline" />
          </span>
          <span className="font-hand text-sage text-[1.7rem] inline-block ml-2 -rotate-[5deg]">
            yours.
          </span>
        </h1>
        <p className="rise text-[1.22rem] max-w-[32ch] mx-auto mt-[30px] leading-[1.55] text-paper/90 [text-shadow:0_1px_10px_rgba(28,20,15,0.6)]">
          In a chaotic world, SOCIO is the corner that's quietly yours, to create, gather, pause and belong. A day here ends with purpose.
        </p>
        <div className="rise flex gap-[14px] mt-[38px] flex-wrap justify-center">
          <Button href="#rooms" onClick={smoothTo('rooms')} variant="light">
            Find your room
          </Button>
          <Button
            href="#visit"
            onClick={smoothTo('visit')}
            variant="ghost"
            className="!text-paper !border-[rgba(239,230,213,0.5)] hover:!bg-paper hover:!text-cocoa"
          >
            Plan a visit
          </Button>
        </div>
        <div className="rise mt-[54px] flex gap-[30px] flex-wrap justify-center text-[0.86rem] text-paper/70 tracking-[0.02em]">
          <span><b className="text-paper font-semibold">An art &amp; gigs studio</b></span>
          <span><b className="text-paper font-semibold">A courtyard</b> for gatherings</span>
          <span><b className="text-paper font-semibold">A room</b> for every kind of person</span>
        </div>
      </Wrap>
    </section>
  )
}
