/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e1630",
        secondary: "#01d293",
        dimWhite: "#e5e7eb",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        border: "rgba(229, 231, 235, 0.33)",
        btnColor: "rgb(255, 255, 255)",
        boxBg: "rgb(23, 31, 56)",
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  darkMode: 'selector'
}

