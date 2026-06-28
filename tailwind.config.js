/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        themeBg: 'var(--color-bg-primary)',
        themeBgSec: 'var(--color-bg-secondary)',
        themeCard: 'var(--color-card-bg)',
        themeBorder: 'var(--color-card-border)',
        themeText: 'var(--color-text-primary)',
        themeTextSec: 'var(--color-text-secondary)',
        themeTextMuted: 'var(--color-text-muted)',
        themeAccent: 'var(--color-accent-pink)',
        themeAccentHover: 'var(--color-accent-pink-hover)',
        themeAccentBg: 'var(--color-accent-pink-bg)',
        themeInputFocus: 'var(--color-border-input-focus)',
        themeInput: 'var(--color-border-input)',
        themeBtnGradStart: 'var(--color-btn-gradient-start)',
        themeBtnGradEnd: 'var(--color-btn-gradient-end)',
        themeBtnGradStartHover: 'var(--color-btn-gradient-start-hover)',
        themeBtnGradEndHover: 'var(--color-btn-gradient-end-hover)',
        themeCursor: 'var(--color-cursor)',
      },
      boxShadow: {
        themeCard: 'var(--color-card-shadow)',
        themeCardHover: 'var(--color-card-hover-shadow)',
      },
      backdropBlur: {
        themeCard: 'var(--backdrop-blur-card)',
      }
    },
  },
  plugins: [],
}