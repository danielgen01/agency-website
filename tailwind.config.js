/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bright-neon-green":"#02FF95",
        "neon-green":"#01F28D",
        "Nav-color-links-text":"#E8FFF5",
        "background":"#0B1926",
        "main-white-color":"#E8FFF5",
        "main-p-color":"#D1FFEB"
      }
    },
  },
  plugins: [],
}