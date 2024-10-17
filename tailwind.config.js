/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22223b',
        secondary: '#4a4e69',
        accent: '#9a8c98',
        light: '#c9ada7',
        background: '#f2e9e4',
      },
    },
  },
  plugins: [],
};