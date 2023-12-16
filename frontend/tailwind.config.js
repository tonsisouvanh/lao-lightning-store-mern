/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.4s infinite both",
        fade: "fade 1.4s infinite both",
        scale: "scale 2s infinite",
        perspective: "perspective 1.2s infinite",
        fadeIn: "fadeIn 1.2s ease-in-out infinite both",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "0.2",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            opacity: " 0.2",
          },
        },
        fade: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: " 0.3",
          },
        },
        fadeIn: {
          "0%, 39%, 100%": {
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(1.0)",
          },
          "50%": {
            transform: "scale(0)",
          },
        },
        perspective: {
          "0%": { transform: "perspective(120px)" },
          " 50%": { transform: "perspective(120px) rotateY(180deg)" },
          "100%": {
            transform: "perspective(120px) rotateY(180deg)  rotateX(180deg)",
          },
        },
      },
      screens: {
        // Define a custom screen size for disabling the keyboard
        "disable-keyboard": { raw: "(max-width: 639px)" },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem,1fr))",
      },
      fontFamily: {
        titillium: ['"Titillium Web"', "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        notosanslao: ["notosanslao", "sans-serif"],
      },
    },
    // colors: { staticPrimary: "#FFBA53", staticSecondary: "#1C386C" },
  },
  plugins: [
    require("daisyui"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FFBA53",
          secondary: "#1C386C",
          // accent: "",
          // neutral: "",
          // "base-100": "",
          "base-200": "#f2f6fc",
          "base-300": "#FFFFFF",
          // info: "",
          success: "#7ED7C1",
          // warning: "",
          // error: "",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FFBA53",
          secondary: "#FFFFFF",
          // accent: "",
          // neutral: "",
          "base-100": "#111729",
          "base-200": "#20293A",
          "base-300": "#20293A",
          // info: "",
          success: "#7ED7C1",
          // warning: "",
          // error: "",
        },
      },
    ],
  },
};
