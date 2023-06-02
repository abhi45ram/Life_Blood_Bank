/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors :{
        'primary' : '#CD0A0A',
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false,
  },
}