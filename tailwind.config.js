/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rancho': ["Rancho", "cursive"],
      },
      backgroundImage: {
        'header': "url('/src/assets/images/more/15.jpg')",
        'hero': "url('/src/assets/images/more/3.png')",
      },
      colors: {
        "bprimary": '#E3B577',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

