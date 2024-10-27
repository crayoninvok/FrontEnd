import daisyui from 'daisyui';
import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik Wet Paint"', 'cursive'],
        'sixtyfour': ['"Sixtyfour Convergence"', 'sans-serif'],
        'days': ['"Days One"', 'sans-serif'],
        'open-sans': ['"Rubik"', 'sans-serif'],
      },
    },

      animation: {
        "loop-scroll": "loop-scroll 35s linear infinite",
      },
      keyframes :{
        "loop-scroll":{
          '0%': { transform: "translateX(100%)" },
          '100%': { transform: "translateX(-100%)"},
        },
      },
      
  },

  plugins: [
    daisyui
  ],
}

