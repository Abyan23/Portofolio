/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',      // index utama
    './src/**/*.{html,js}', // semua file html & js di src/
  ],
  theme: {
    extend: {
      fontFamily: {
        judul: ["'Press Start 2P'", "system-ui"],
        judul2: ["VT323", "monospace"]
      }
    },
  },
  plugins: [],
}
