module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#303030",
      darkblack: "#000000",
      primary: "#06f319",
      secondary: "#3a62b0",
      facebook: "#4267B2",
      twitter: "#1DA1F2",
      instagram: "#E1306C",
      gray: "#6b6a6a",
      greyhound: "#999999",
      owhte: "#eeeeee",
    },
    boxShadow: {
      xl: "4px 1px 8px 0 rgba(0, 0, 0, 0.75)",
      lg: "0 2px 5px rgba(0, 0, 0, 0.7)",
      md: "0 3px 7px -5px rgba(0, 0, 0, 0.5)",
      sm: "0 2px 5px rgba(0, 0, 0, 0.2)",
    },
  },
  plugins: [],
};
