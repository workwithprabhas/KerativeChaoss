import { Wrap, Eyebrow } from './ui.jsx'

const moments = [
  { t: 'first', h: 'A pause', p: 'Set the chaotic morning down at the door.' },
  { t: 'then', h: 'A long breath', p: 'The aura does the rest, a quiet sign to build yourself back up.' },
  { t: 'midday', h: 'A sip of coffee', p: 'Gossip about the whole world, or say nothing at all.' },
  { t: 'after', h: 'A thing made', p: 'Paint, play, plant, perform, create something together.' },
  { t: 'dusk', h: 'A purpose', p: 'A day that ends meaningful, and asks you to come back.' },
]

export default function Day() {
  return (
    <section id="day" className="relative z-[2] py-[104px] max-md:py-[78px]">
      <Wrap>
        <div className="rise text-center max-w-[60ch] mx-auto mb-[54px]">
          <Eyebrow>A day at SOCIO</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px]">
            The small things,<br />which make us stay.
          </h2>
          <p className="text-[1.12rem] text-[#4a3d33] mt-[18px] max-w-[54ch] mx-auto">
            It's just time away from your day, and that's exactly what makes it memorable.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-x-[18px] gap-y-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-[520px]:grid-cols-1">
          {moments.map((m, i) => (
            <div
              key={m.h}
              className="border-t-2 border-clay pt-[18px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[1.05rem] text-muted">{m.t}</span>
                <span className="font-display text-[0.95rem] text-clay/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-[1.55rem] mt-2 mb-1.5">{m.h}</h3>
              <p className="text-[0.95rem] text-[#5a4d40] m-0">{m.p}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
