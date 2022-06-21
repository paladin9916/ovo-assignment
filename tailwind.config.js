/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['16px'],
        title: ['20px', '28px'],
        summary: ['14px', '16px'],
        btn: ['14px', '18px'],
        input: ['14px', '18px']
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#202020',
        base: '#2f2f2f',
        title: '#101010',
        summary: '#7f7f7f'
      }
    }
  },
  plugins: [],
}
