const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cardo', 'serif']
      },
      letterSpacing: {
        widest: '0.3em'
      },
      colors: {
        primary: '#22223b',
        secondary: '#4a4e69',
        accent: '#9a8c98',
        light: '#c9ada7',
        background: '#f2e9e4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(function({ addVariant }) {
      addVariant('supports-sda', '@supports (timeline-scope: none)')
    }),
  ],
};
