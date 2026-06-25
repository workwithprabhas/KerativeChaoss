import { Wrap, Eyebrow, Button } from './ui.jsx'

const rows = [
  { k: 'Where', v: 'SOCIO', sub: 'Add your street & city here' },
  { k: 'Open', v: 'Every day', sub: 'Morning till late · set your hours' },
  { k: 'Find us', v: '@socio', sub: 'Add your Instagram / phone' },
  { k: 'For', v: 'Gigs · events · gatherings', sub: 'Book a room for your evening' },
]

export default function Visit() {
  return (
    <section id="visit" className="relative z-[2] bg-cocoa text-[#ECE3D2] py-[104px] max-md:py-[78px]">
      <Wrap>
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-[60px] items-center max-md:grid-cols-1 max-md:gap-[38px]">
          <div className="rise">
            <Eyebrow className="!text-ochre">Come over</Eyebrow>
            <h2 className="text-[clamp(2.3rem,5vw,3.8rem)] text-[#F4EBDA] mt-[14px]">
              Find your habitat in the chaos.
            </h2>
            <p className="font-display italic text-[1.3rem] text-ochre my-[22px] mb-[30px]">
              A day here ends with purpose, and a quiet promise that you'll be back.
            </p>
            <div className="flex gap-[14px] flex-wrap">
              <Button href="#" variant="light">Get directions</Button>
              <Button
                href="#"
                variant="ghost"
                className="!text-[#ECE3D2] !border-[rgba(236,227,210,0.4)] hover:!bg-[#ECE3D2] hover:!text-cocoa"
              >
                Message us
              </Button>
            </div>
            <p className="mt-6">
              <span className="font-hand text-olive text-[1.15rem]">
                psst, swap in your real address, hours &amp; links below ✎
              </span>
            </p>
          </div>

          <div className="rise rounded-[10px] p-[30px] bg-white/[0.04] border border-[rgba(236,227,210,0.18)]">
            {rows.map((r) => (
              <div
                key={r.k}
                className="flex justify-between gap-4 py-[15px] border-b border-[rgba(236,227,210,0.12)] last:border-b-0"
              >
                <span className="text-[#B6A98F] text-[0.78rem] tracking-[0.14em] uppercase">
                  {r.k}
                </span>
                <span className="text-[#F0E7D6] text-right font-medium">
                  {r.v}
                  <small className="block text-[#9c8f78] font-normal text-[0.8rem] tracking-normal normal-case">
                    {r.sub}
                  </small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}
