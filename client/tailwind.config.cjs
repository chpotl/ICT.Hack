/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#0052CC",
        blue: "#233DAE",
        mainGreen: "#00FF5F",
        darkGreen: "#22D066",
        lightGreen: "#75FA7A",
        black: "#090A0C",
        lightBlack: "#1E1E21",
        hovLightBlack: "#3A3A40",
        gray: "#6B6C6D",
        lightGray: "#858687",
        yellow: "#F0B909",
      },
    },
  },
  plugins: [],
}
