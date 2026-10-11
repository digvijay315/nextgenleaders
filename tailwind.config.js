/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#041238", 900: "#061B4D", 800: "#0A2A6E" },
        royal: "#0B3C9E",
        sky: { DEFAULT: "#1EA7FF", soft: "#E8F4FF" },
        gold: { DEFAULT: "#FFC928", deep: "#E0A800" },
        ink: "#0F1B3D",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
