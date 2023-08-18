/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      '3xs': '375px',
      '2xs': '425px',
      'xs': '500px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Rubik', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}

