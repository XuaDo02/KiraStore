/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#F8F3D9',
        customBrown: '#785C3A',
        customBlue: '#CBF7D5',
        customWhite: '#fafdf9',
        customBlue1: '#AFD7FF',
        customBlue: '#003868'
      },
    },
  },
  plugins: [],
}