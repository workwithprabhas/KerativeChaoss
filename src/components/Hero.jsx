import { Wrap, Button } from './ui.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative pt-[120px] pb-24 overflow-hidden max-[520px]:pt-[96px] max-[520px]:pb-[72px]">
      {/* breathing honey glow, top-right */}
      <div
        aria-hidden="true"
        className="absolute -top-[180px] -right-[120px] w-[620px] h-[620px] pointer-events-none z-0 animate-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(212,154,74,.55), rgba(212,154,74,0) 62%)',
        }}
      />

      {/* a little sprig, bottom-left */}
      <svg
        className="absolute z-[1] opacity-50 text-olive"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        style={{ bottom: '18px', left: '-14px' }}
        aria-hidden="true"
      >
        <path d="M120 8C80 40 55 80 40 140" />
        <path d="M96 28c-14-4-26 2-30 14 13 3 25-2 30-14Z" />
        <path d="M78 56c-15-2-26 6-28 18 13 1 24-6 28-18Z" />
        <path d="M60 88c-15 0-25 9-25 21 13-1 23-9 25-21Z" />
      </svg>

      <Wrap className="relative z-[2] text-center">
        <h1 className="rise text-[clamp(3.2rem,9.5vw,7.2rem)]" style={{ fontOpticalSizing: 144 }}>
          It was never<br />just a cafe.<br />It's a{' '}
          <span className="relative italic text-clay">
            home.
            <span className="hero-underline absolute left-0 right-0 bottom-[0.08em] h-[0.09em] rounded-[2px] bg-ochre origin-left scale-x-0 animate-underline" />
          </span>
          <span className="font-hand text-olive text-[1.7rem] inline-block ml-2 -rotate-[5deg]">
            yours.
          </span>
        </h1>
        <p className="rise text-[1.22rem] max-w-[32ch] mx-auto mt-[30px] leading-[1.55] text-[#4a3d33]">
          In a chaotic world, SOCIO is the corner that's quietly yours, to create, gather, pause and belong. A day here ends with purpose.
        </p>
        <div className="rise flex gap-[14px] mt-[38px] flex-wrap justify-center">
          <Button href="#rooms" variant="solid">Find your room</Button>
          <Button href="#visit" variant="ghost">Plan a visit</Button>
        </div>
        <div className="rise mt-[54px] flex gap-[30px] flex-wrap justify-center text-[0.86rem] text-muted tracking-[0.02em]">
          <span><b className="text-ink font-semibold">An art &amp; gigs studio</b></span>
          <span><b className="text-ink font-semibold">A courtyard</b> for gatherings</span>
          <span><b className="text-ink font-semibold">A room</b> for every kind of person</span>
        </div>
      </Wrap>
    </section>
  )
}
