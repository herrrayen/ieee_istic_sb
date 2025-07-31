import {heroui} from "@heroui/theme"

const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        local: ["var(--font-local)"],
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#005BC4",
            foreground: "#000000",
          },
          secondary:{
            DEFAULT: "#FFFFFF ",
          },
          focus: "#BEF264",
        },
      },
    }}),
    require('tailwind-scrollbar-hide')
  ],
}

module.exports = withMT(config);