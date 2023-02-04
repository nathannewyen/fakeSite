/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["16px", "22px"],
      md: ["22px", "28px"],
      lg: ["36px", "36px"],
      xl: ["48px", "48px"],
    },
    extend: {
      colors: {
        blueish: "#88939E",
        redish: "#EE2D1C",
        blackish: "#4C4C51",
      },
      backgroundImage: {
        videoOverlay:
          "linear-gradient(180deg, rgba(238,45,28,1) 0%, rgba(255,177,181,1) 100%)",
      },
      backgroundColor: {
        blackish: "#4C4C51",
      },
      margin: {
        section: "40px",
        heading: "22px",
      },
    },
  },
  variants: {
    opacity: ["hover"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
