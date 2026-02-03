/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',     
    './src/**/*.{html,js}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        judul: ["'Press Start 2P'", "system-ui"],
        main:["Inter", "sans-serif"],
        main2:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
