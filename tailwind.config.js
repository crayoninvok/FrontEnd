import daisyui from 'daisyui';

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
  },
  plugins: [
    daisyui
  ],
}

