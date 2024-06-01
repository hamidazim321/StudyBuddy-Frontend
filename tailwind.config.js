/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "BGlight": "#f0f0ea",
        "BGdark": "#2e3944",
        "BGmedium": "#d3d9d4",
        "Text-Grey": "8f8e8e"
      }
    },
  },
  plugins: [],
}

