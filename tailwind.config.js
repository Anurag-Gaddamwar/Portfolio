/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      pointerEvents: ['group-hover'],
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-start': '#1a1b26',
        'dark-end': '#42445a',
      },
      backgroundImage: theme => ({
        'tech-dark-gradient': 'linear-gradient(to top, var(--tw-gradient-stops))',
      }),
      linearGradients: {
        'bg-top': ['180deg', '#0e1016 0%', 'transparent 50%'],
        'bg-bottom': ['0deg', '#0e1016 0%', 'transparent 100%'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
