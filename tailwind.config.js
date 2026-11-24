/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        berfest: {
          gold: '#FACC15',
          amber: '#F59E0B',
          orange: '#F97316',
          burnt: '#EA580C',
          crimson: '#B91C1C',
          dark: '#18181B',
        },
      },
      boxShadow: {
        'berfest': '0 18px 45px -12px rgba(234, 88, 12, 0.14), 0 4px 16px -4px rgba(15, 23, 42, 0.05)',
        'berfest-lg': '0 24px 60px -15px rgba(185, 28, 28, 0.18), 0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        'berfest-card': '0 10px 30px -8px rgba(15, 23, 42, 0.07), 0 2px 6px -1px rgba(249, 115, 22, 0.06)',
      },
    },
  },
  plugins: [],
}
