/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss,css}'],
  theme: {
    extend: {
      colors: {
        'saticoy-bg-light': '#ffffff',
        'saticoy-bg-dark': '#1b2635',
        'saticoy-bg-card-light': '#233044',
        'saticoy-bg-card-dark': '#233044',
      }
    },
  },
  plugins: [],
}

