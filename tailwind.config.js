/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // exact palette from the original socio.html
        paper: '#EFE6D5', // warm honey paper — the base wall
        'paper-2': '#E8DDC8', // a slightly deeper wall, for the rooms
        cocoa: '#261D17', // the evening room — lamplit dark brown
        'cocoa-2': '#1C140F', // darkest, the footer
        ink: '#2B221C', // warm near-black text
        sage: '#D7DBC3', // soft garden green — growth, plants, trees
        olive: '#5E6647', // deeper green accent
        clay: '#BC5E3B', // clay accent, used with restraint
        ochre: '#D49A4A', // honey lamplight — the glow
        muted: '#7C6E5E', // muted warm grey-brown for captions
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      maxWidth: {
        wrap: '1180px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      keyframes: {
        breathe: {
          '0%,100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        underline: {
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        breathe: 'breathe 9s ease-in-out infinite',
        underline: 'underline 1s ease 0.5s forwards',
      },
    },
  },
  plugins: [],
}
