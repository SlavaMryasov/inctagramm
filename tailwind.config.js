const { palette } = require('uikit-inctagram')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {
      colors: palette,
      height: {
        header: 'calc(100dvh - 61px)',
      },
    },
  },
}
