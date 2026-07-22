import { useEffect, useMemo, useState } from 'react'

/* ── Google Sheet hookup ───────────────────────────────────────────────
 * 1. Create a Google Sheet → Extensions → Apps Script → paste the doPost
 *    script (see SEO.md / ask your developer) → Deploy → Web app →
 *    "Execute as: Me", "Who has access: Anyone" → copy the URL.
 * 2. Paste that URL below and redeploy the site.                        */
const SHEET_WEBAPP_URL =
  'https://script.google.com/macros/s/AKfycbwGu0IdsERYM2SEDK-hq5p2d8KoAicqAcfi50Zm6N3N9yXmNjf0XedHOmTaeY4IPFjINw/exec'

const STORY_MAX = 150
// the popup retires itself after Aug 2nd, 11:59 PM IST
const EVENT_OVER = new Date() > new Date('2026-08-02T23:59:59+05:30')

const CONFETTI_COLORS = ['#BC5E3B', '#D49A4A', '#D7DBC3', '#5E6647', '#F4EBDA']

// a friendly handshake, with little sparks of celebration
const Handshake = () => (
  <svg width="58" height="48" viewBox="0 0 32 26" fill="none" aria-hidden="true" className="mx-auto">
    {/* celebration sparks */}
    <g stroke="#D49A4A" strokeWidth="1.1" strokeLinecap="round">
      <path d="M5 3v2.4M3.8 4.2h2.4" />
      <path d="M27 2.6v2.4M25.8 3.8h2.4" />
      <path d="M16 1.4v1.8" />
    </g>
    {/* handshake */}
    <g
      stroke="#BC5E3B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(4 4)"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </g>
  </svg>
)

export default function FriendshipPopup() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [story, setStory] = useState('')
  const [error, setError] = useState('')

  // confetti pieces (only generated once per mount); each gets its own launch
  // height (--peak) and sideways drift (--drift) so the burst feels natural
  const confetti = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        left: `${(i * 137.5) % 100}%`,
        delay: `${((i * 61) % 90) / 100}s`,
        duration: `${2.6 + ((i * 37) % 160) / 100}s`,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        peak: `${65 + ((i * 53) % 45)}vh`,
        drift: `${((i * 29) % 17) - 8}vw`,
      })),
    []
  )

  useEffect(() => {
    if (EVENT_OVER) return
    if (localStorage.getItem('socio-fd-submitted')) return
    if (sessionStorage.getItem('socio-fd-seen')) return
    const t = setTimeout(() => setOpen(true), 1200)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    sessionStorage.setItem('socio-fd-seen', '1')
    setOpen(false)
  }

  const submit = (e) => {
    e.preventDefault()
    const cleanMobile = mobile.replace(/[^\d]/g, '')
    if (!name.trim()) return setError('Tell us your name!')
    if (!/^[6-9]\d{9}$/.test(cleanMobile))
      return setError('That mobile number doesn’t look right (10 digits).')
    if (!story.trim()) return setError('Don’t be shy, tell us the story!')
    setError('')

    // fire-and-forget to the Google Sheet (no-cors: response is opaque)
    if (SHEET_WEBAPP_URL.startsWith('http')) {
      fetch(SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: name.trim(),
          mobile: cleanMobile,
          story: story.trim(),
          submittedAt: new Date().toLocaleString('en-IN'),
        }),
      }).catch(() => {})
    }

    localStorage.setItem('socio-fd-submitted', '1')
    setDone(true)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-cocoa/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Friendship Day at SOCIO"
    >
      {/* confetti burst after submitting */}
      {done &&
        confetti.map((c, i) => (
          <span
            key={i}
            className="confetti"
            style={{
              left: c.left,
              background: c.color,
              animationDelay: c.delay,
              animationDuration: c.duration,
              '--peak': c.peak,
              '--drift': c.drift,
            }}
          />
        ))}

      <div className="popup-in relative max-h-[94vh] w-full max-w-[420px] overflow-y-auto overflow-x-hidden rounded-2xl border-[1.5px] border-clay/40 bg-paper p-6 text-center shadow-[0_30px_80px_-20px_rgba(28,20,15,0.6)] max-[380px]:p-5">
        {/* honey glow behind the card content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,154,74,.35), rgba(212,154,74,0) 65%)',
          }}
        />

        {/* close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 grid h-8 w-8 cursor-pointer place-items-center rounded-full text-muted transition hover:bg-ink/5 hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {!done ? (
          <>
            <Handshake />
            <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-clay">
              Aug 2nd · Friendship Day
            </p>
            <h3 className="mt-2 font-display text-[1.75rem] leading-[1.1] text-ink">
              Bring your <span className="italic text-clay">best friend</span>,
              <br />
              win an <span className="italic text-clay">art</span>
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-[0.92rem] leading-[1.45] text-[#5a4d40]">
              We're celebrating Friendship Day at SOCIO. Tell us your best-friend story,
              the sweetest ones win an art from our studio.
            </p>

            <form onSubmit={submit} className="mt-4 text-left">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Your name"
                className="w-full rounded-xl border-[1.5px] border-ink/20 bg-white/60 px-4 py-2.5 font-hand text-[1.35rem] leading-[1.3] text-ink outline-none transition placeholder:text-muted/70 focus:border-clay"
              />
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile number"
                aria-label="Mobile number"
                inputMode="numeric"
                className="mt-2.5 w-full rounded-xl border-[1.5px] border-ink/20 bg-white/60 px-4 py-2.5 font-hand text-[1.35rem] leading-[1.3] text-ink outline-none transition placeholder:text-muted/70 focus:border-clay"
              />
              <div className="relative mt-2.5">
                <textarea
                  value={story}
                  onChange={(e) => setStory(e.target.value.slice(0, STORY_MAX))}
                  placeholder="Your best-friend story, keep it short & sweet…"
                  aria-label="Your best-friend story"
                  rows={3}
                  maxLength={STORY_MAX}
                  className="w-full resize-none rounded-xl border-[1.5px] border-ink/20 bg-white/60 px-4 py-2.5 font-hand text-[1.35rem] leading-[1.35] text-ink outline-none transition placeholder:text-muted/70 focus:border-clay"
                />
                <span className="absolute bottom-2 right-3 text-[0.7rem] text-muted">
                  {story.length}/{STORY_MAX}
                </span>
              </div>

              {error && <p className="mt-2 text-[0.85rem] text-clay">{error}</p>}

              <button
                type="submit"
                className="mt-3 w-full cursor-pointer rounded-full border border-ochre bg-ochre px-6 py-3 text-[0.98rem] font-semibold text-cocoa transition hover:-translate-y-0.5 hover:bg-[#e2ab5d] hover:shadow-[0_8px_20px_-8px_rgba(212,154,74,0.7)]"
              >
                Celebrate with SOCIO
              </button>
              <p className="mt-2 text-center font-hand text-[1.05rem] text-olive">
                the sweetest story wins ✎
              </p>
            </form>
          </>
        ) : (
          <div className="py-4">
            <Handshake />
            <h3 className="mt-3 font-display text-[2rem] italic leading-[1.05] text-ink">
              Yay, you're in!
            </h3>
            <p className="mx-auto mt-3 max-w-[30ch] text-[0.98rem] leading-[1.55] text-[#5a4d40]">
              Let's celebrate Friendship Day together at SOCIO on{' '}
              <b className="font-semibold text-ink">Aug 2nd</b>. If your story melts our
              hearts, an art from our studio is yours.
            </p>
            <p className="mt-4 font-hand text-[1.35rem] text-clay">
              see you & your favourite person there!
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-5 cursor-pointer rounded-full border border-ink bg-ink px-7 py-2.5 text-[0.95rem] font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-clay hover:border-clay"
            >
              Can't wait
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
