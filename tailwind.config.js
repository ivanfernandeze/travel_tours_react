/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F16D56',
        secondary: '#4D536B',
        "bg-color": '#FAFAFA',
      },
    },
  },
  plugins: [],
}