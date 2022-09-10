/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inknut': ['Inknut Antiqua', 'serif'],
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'search': '#e8e8e8',
        'button': '#d0c9c2',
        'main': '#202020',
        'showcase': '#dcdcdc',
        'dendro': '#1a7e2a'
      }
    },
  },
  plugins: [],
}
