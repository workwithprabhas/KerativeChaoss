import { Wrap, Eyebrow, Button } from './ui.jsx'

const ADDRESS =
  'Plot No 8, Vivekananda Enclave, Door No: 8, 2-269/N/8, Rd Number 2, beside Challa Eye Hospital, Sagar Society, Banjara Hills, Hyderabad, Telangana 500034'
const INSTAGRAM_URL = 'https://www.instagram.com/socio.hyd?igsh=ZG1xcTkzczNmb3pv'
const MAPS_URL = 'https://maps.app.goo.gl/HiFXnvjKTuLAWaUMA'
// WhatsApp table-booking chat (+91 99597 32328) with a pre-filled message
const WHATSAPP_URL =
  'https://wa.me/919959732328?text=' +
  encodeURIComponent("Hi SOCIO, I'd like to book a table.")

const rows = [
  { k: 'Where', v: 'SOCIO', sub: ADDRESS },
  {
    k: 'Timings',
    v: 'Open every day',
    lines: [
      { label: 'Art', time: '10 AM – 8 PM' },
      { label: 'Cafe', time: '11 AM – 9 PM' },
    ],
  },
  { k: 'Find us', v: '@socio.hyd', sub: 'Follow on Instagram', href: INSTAGRAM_URL },
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
              <Button href={MAPS_URL} target="_blank" rel="noopener noreferrer" variant="light">
                Get directions
              </Button>
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="!text-[#ECE3D2] !border-[rgba(236,227,210,0.4)] hover:!bg-[#ECE3D2] hover:!text-cocoa"
              >
                Message us
              </Button>
            </div>
            <p className="mt-6 font-hand text-olive text-[1.15rem]">
              Banjara Hills · open every day.
            </p>
          </div>

          <div className="rise rounded-[10px] p-[30px] bg-white/[0.04] border border-[rgba(236,227,210,0.18)]">
            {rows.map((r) => (
              <div
                key={r.k}
                className="flex justify-between gap-4 py-[15px] border-b border-[rgba(236,227,210,0.12)] last:border-b-0"
              >
                <span className="text-[#B6A98F] text-[0.78rem] tracking-[0.14em] uppercase shrink-0">
                  {r.k}
                </span>
                <span className="text-[#F0E7D6] text-right font-medium">
                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ochre no-underline hover:underline"
                    >
                      {r.v}
                    </a>
                  ) : (
                    r.v
                  )}
                  {r.lines && (
                    <span className="mt-1.5 block">
                      {r.lines.map((l) => (
                        <span
                          key={l.label}
                          className="block text-[0.9rem] font-normal leading-[1.6]"
                        >
                          <span className="text-[#B6A98F]">{l.label}</span> {l.time}
                        </span>
                      ))}
                    </span>
                  )}
                  {r.sub && (
                    <small className="block text-[#9c8f78] font-normal text-[0.8rem] tracking-normal normal-case leading-[1.5] mt-0.5">
                      {r.sub}
                    </small>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}
