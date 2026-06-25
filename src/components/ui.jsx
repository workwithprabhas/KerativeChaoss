/* Small shared primitives reused across the page. */

// Centered content column, the original `.wrap` (max-width 1180px, side padding).
export function Wrap({ className = '', children }) {
  return (
    <div className={`w-full max-w-wrap mx-auto px-7 ${className}`}>{children}</div>
  )
}

// The little uppercase label above headings, the original `.eyebrow`.
export function Eyebrow({ className = '', children }) {
  return (
    <span
      className={`font-body text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-clay ${className}`}
    >
      {children}
    </span>
  )
}

// Pill button with the three variants from the original: solid / ghost / light.
export function Button({ as = 'a', variant = 'solid', className = '', children, ...props }) {
  const Tag = as
  const base =
    'inline-flex items-center gap-[0.6ch] px-[22px] py-[11px] rounded-full font-semibold text-[0.95rem] border no-underline transition-[transform,background-color] duration-200 ease-out'
  const variants = {
    solid:
      'bg-ink text-paper border-ink hover:bg-clay hover:border-clay hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper',
    light:
      'bg-ochre text-cocoa border-ochre hover:bg-[#e2ab5d] hover:border-[#e2ab5d]',
  }
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
