/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Main": "rgb(248 250 252)",
        "Secondary": "rgb(226 232 240)",
        "Purple": "rgb(147 51 234)",
        "Fuchsia": "rgb(192 38 211)",
        "Sky": "rgb(2 132 199)",
        "Green": "rgb(22 163 74)",
        "Amber": "rgb(251 191 36)"
      }
    },
  },
  plugins: [],
}

