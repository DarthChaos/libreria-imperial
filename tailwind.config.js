/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        red: {
          1: "#DC0817",
          2: "#E31717",
          3: "#C82424",
        },
        yellow: {
          1: "#F3CA4C",
          2: "#FFDF00",
          3: "#EFB810",
        },
        blue: "#03F7EB",
        gray: {
          1: "#D9D9D9",
          2: "#686868",
        },
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
