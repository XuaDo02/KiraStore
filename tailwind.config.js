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
        customBlue: '#003868',
        customGrayLight: "#D8D8D8",
        customGrayDark: "#939090",
        customYellow: "#FBAF17",
        customBlack: "#2E2E2E",
        customGray: "#5F5F5F",
        customDarkGray: "#252525",
        customWhite: "#FFFFFF",
        customDark: "#080808",
        customDark2: "#151515",
        customBlack2: "#000000",
        customDark3: "#212121",
        customRed: "#FF453A"
      },
    },
  },
  plugins: [],
}