/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020016",
        secondary1: "#FF7A00",
        secondary2: "#FFE500",
      },
      fontFamily: {
        oxanium: ["oxanium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
