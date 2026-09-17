module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        void: "#06070a",
        surface: "#12131a",
        "surface-2": "#1b1d26",
        ink: "#f4f5f7",
        mist: "#9aa1ae",
        signal: "#3d8bff",
      },
      fontFamily: {
        sora: ["Sora", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
