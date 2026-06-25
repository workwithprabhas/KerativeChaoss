import { Link } from 'react-router-dom'
import { Wrap, Eyebrow } from './ui.jsx'

const Mark = ({ children }) => (
  <div className="flex-none w-11 h-11 rounded-full grid place-items-center text-olive mt-1 bg-olive/[0.16]">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {children}
    </svg>
  </div>
)

const people = [
  {
    slug: 'women',
    title: 'For the women',
    body: 'Kitty parties and food challenges, art pieces and good company, with the children happily busy in a room of their own.',
    icon: (
      <Mark>
        <path d="M3 21c0-4 4-6 9-6s9 2 9 6" />
        <circle cx="12" cy="8" r="4" />
      </Mark>
    ),
  },
  {
    slug: 'men',
    title: 'For the men',
    body: 'A courtyard for soft music and doing nothing at all, or for running the next big idea over a slow morning coffee.',
    icon: (
      <Mark>
        <path d="M4 21c0-3.5 3.5-5 8-5s8 1.5 8 5" />
        <circle cx="12" cy="8" r="4" />
      </Mark>
    ),
  },
  {
    slug: 'teens',
    title: 'For the teens',
    body: 'A first stage to show what they can do, talent that finally has somewhere to stand up and be seen.',
    icon: (
      <Mark>
        <path d="M12 3l2.5 5 5.5.8-4 4 1 5.5L12 16l-5 2.3 1-5.5-4-4 5.5-.8z" />
      </Mark>
    ),
  },
  {
    slug: 'storytellers',
    title: 'For the storytellers',
    body: 'Poets, musicians and makers, inspiration for anyone who has something to say, and like minds to hear it.',
    icon: (
      <Mark>
        <path d="M4 19.5V6a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
        <path d="M9 8h7M9 11h7" />
      </Mark>
    ),
  },
]

export default function People() {
  return (
    <section id="people" className="relative z-[2] bg-sage py-[104px] max-md:py-[78px]">
      <Wrap>
        <div className="rise text-center max-w-[60ch] mx-auto mb-[54px]">
          <Eyebrow className="!text-olive">Who belongs</Eyebrow>
          <h2 className="text-[clamp(2.1rem,5vw,3.4rem)] mt-[14px] text-[#33381f]">
            A home wide enough<br />for everyone in it.
          </h2>
          <p className="text-[1.12rem] mt-[18px] max-w-[54ch] mx-auto text-[#4c5234]">
            SOCIO doesn't pick a crowd. It keeps a room ready for whoever walks in.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-[56px] gap-y-[30px] max-md:grid-cols-1 max-md:gap-[26px]">
          {people.map((p) => (
            <Link
              key={p.title}
              to={`/belong/${p.slug}`}
              className="rise group flex cursor-pointer items-start gap-[18px] rounded-lg p-3 -m-3 no-underline transition-colors duration-300 hover:bg-olive/[0.08]"
            >
              {p.icon}
              <div>
                <h3 className="flex items-center gap-1.5 text-[1.35rem] text-[#2f3420] transition-colors group-hover:text-olive">
                  {p.title}
                  <span className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">
                    →
                  </span>
                </h3>
                <p className="mt-1.5 text-[1.02rem] leading-[1.55] text-[#4c5234]">{p.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
