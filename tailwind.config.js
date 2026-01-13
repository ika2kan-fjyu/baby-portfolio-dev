/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#E0F2FE',
        'theme-pink': '#FCE7F3',
        'theme-yellow': '#FEF3C7',
        'theme-mint': '#D1FAE5',
        'theme-lavender': '#EDE9FE',
        'bg-base': '#F8FAFC',
      },
      fontFamily: {
        rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}

