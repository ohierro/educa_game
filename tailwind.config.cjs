/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
        screens: {
            'betterhover': {'raw': '(hover: hover)'},
        }
    }
  },
  plugins: [
    require('daisyui')
  ],
}
