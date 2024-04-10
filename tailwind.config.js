/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#0866ff',
        'facebook-green': '#42b72a',
        'facebook-black': '#1a1f26',
        'facebook-gray': '#f1f2f6',
        'facebook-hover-create': '#36a420',
        'facebook-hover-entrar': '#1877f2',
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}