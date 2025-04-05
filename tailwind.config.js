/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#1dd1a1",
      secondary: "#B91C1C",
      grayscaleA: "#000",
      grayscaleB: "#303030",
      grayscaleC: "#949494",
      grayscaleD: "#DFDFDF",
      grayscaleE: "#FCFCFC",
      grayscaleF: "#FFF",
    },
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      "right-bottom": "right bottom",
      "right-center": "right center",
      "right-top": "right top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "20%": "20%",
    },
    extend: {},
  },
  plugins: [],
};
