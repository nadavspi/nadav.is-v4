const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slidein: "slidein 500ms ease var(--animation-delay, 100ms) forwards",
        rotateAway: "rotateAway 3s ease-in-out forwards",
        rotateInAndAway: "rotateInAndAway 3s ease-in-out var(--animation-delay, 0)",
        rotateIn: "rotateIn 1s ease-in-out var(--animation-delay, 100ms) forwards",
      },
      keyframes: {
        rotateAway: {
          "0%, 20%, 80%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
          "100%": { transform: "translate3d(0, -40px, 0)", opacity: 0 },
        },
        rotateInAndAway: {
          "0%": { transform: "translate3d(0, 80px, 0)", opacity: 0 },
          "20%, 80%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
          "100%": { transform: "translate3d(0, -40px, 0)", opacity: 0 },
        },
        rotateIn: {
          "0%": { transform: "translate3d(0, 1em, 0)", opacity: 0 },
          "20%, 80%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
          "100%": { transform: "translate3d(0, 0, 0)", opacity: 1 },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-1em)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      screens: {
        "3xl": "1600px",
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "1.5",
          },
        },
      },
    },
    fontFamily: {
      serif: ["FF Tundra", "Georgia", " serif"],
    },
    colors: {
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      purple: {
        dark: "#1b191f",
        DEFAULT: "#5d178f",
        pale: "#ead3ff",
        light: "#d2d0e2",
      },
      tumbleweed: {
        50: "#fbf7f1",
        100: "#f6ecde",
        200: "#ecd6bc",
        300: "#e0b991",
        400: "#d9a479",
        DEFAULT: "#d9a479",
        500: "#ca7c45",
        600: "#bc673a",
        700: "#9c5132",
        800: "#7e422e",
        900: "#663828",
        950: "#361b14",
      },
      cyan: {
        50: "#effbfc",
        100: "#d7f4f6",
        200: "#b3e9ee",
        300: "#7fd7e1",
        400: "#43bdcd",
        500: "#2baec2",
        DEFAULT: "#2baec2",
        600: "#248296",
        700: "#23697b",
        800: "#255765",
        900: "#234956",
        950: "#12303a",
      },
      greenlake: {
        50: "hsl(171, 41%, 97%)",
        100: "hsl(167, 49%, 89%)",
        200: "hsl(168, 48%, 78%)",
        300: "hsl(170, 44%, 64%)",
        400: "hsl(172, 38%, 50%)",
        500: "hsl(173, 46%, 39%)",
        DEFAULT: "hsl(173, 46%, 39%)",
        600: "hsl(174, 48%, 32%)",
        700: "hsl(174, 44%, 26%)",
        800: "hsl(175, 41%, 22%)",
        900: "hsl(176, 34%, 19%)",
        950: "hsl(178, 49%, 10%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
