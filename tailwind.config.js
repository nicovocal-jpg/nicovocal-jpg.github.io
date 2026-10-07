const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#0c1116",
      purple: "#2bb3a8",
      red: "#cf0000",
      green: "#00ac56",
      amber: "#f0b35a",
      "amber-soft": "#2e2412",
      "teal-soft": "#12302e",
      indigo: {
        light: "#4fd1c5",
        dark: "#0b7a75",
      },
      gray: {
        light: {
          1: "#e6ebf0",
          2: "#c9d1d9",
          3: "#97a3af",
          4: "#7d8895",
        },
        dark: {
          1: "#24303b",
          2: "#1c252e",
          3: "#131a21",
          4: "#10161c",
          5: "#0c1116",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
    },
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
