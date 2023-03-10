/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      buttonBlue : "#54B0FF",
      btnHoverBlue: "#517EF5",
      opaqueBlack : "#1C1C1C"
    },
  },
 }
})
