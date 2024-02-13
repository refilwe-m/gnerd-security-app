/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#0D1117",
      },
      colors: {
        purple: "#773FC7",
        green: "#3FB950",
      },
    },
  },
  plugins: [],
};
