/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontFamily: {
        switzer: ["Switzer-Regular", "sans-serif"],
      },
    },
    extend: {
      maxWidth: {
        maxContentWidth: "393px",
      },
    },
  },
  plugins: [],
};
