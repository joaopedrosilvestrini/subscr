module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@voidpkg/react-ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 2s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%, 50%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center right",
          },
        },
      },
      colors: {
        primary: "#878787",
        secondary: "#0B0A1F",
        default: "#0f0e1a",
        nav: "#000000",
        "primary-light": "#e0e3f2",
        "secondary-light": "#c2c5d7",
        "primary-dark": "#65697d",
        "secondary-dark": "#4b5061",
        btnhover: "rgba(71,85,105,0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
