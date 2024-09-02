/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eee",
        darkBrown: "#562A25",
        logoYellow: "#EADFC9",
        darkBrownUnderlineHeader: "#BBB2A0",
        footerColor: "#282c34",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
