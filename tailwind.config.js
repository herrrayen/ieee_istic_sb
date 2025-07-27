import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        local: ["var(--font-local)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({themes: {
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
  },})],  
  
}

module.exports = config;