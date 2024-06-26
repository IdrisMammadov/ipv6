/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes: ["light"]
  },
  plugins: [require("daisyui")],
}

