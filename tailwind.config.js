/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#d73cbe",
        "custom-pink-dark": "#ab2395",
        "custom-yellow" : "#F6D9C7",
      },
    },
  },
  plugins: [],
}