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
        'button-hover': '#ded5cc',
        'main': '#202020',
        'focus': '#00483b',
        'showcase': '#dcdcdc',
        'daily': '#001c63',
      },
      backgroundImage: {
        'inazuma': "url('./assets/bg-inazuma.png')",
        'char': "url('./assets/bg-char.png')",
        'new-content': "url('./assets/new-content/tighnari.png')"
      },
    },
    screens: {
      'sm': '640px',
      'amd': '513px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
