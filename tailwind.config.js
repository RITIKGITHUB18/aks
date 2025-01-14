/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "393px",
      sm: "440px",
    },
    fontFamily: {
      switzer: ["Switzer-Regular", "sans-serif"],
      openSans: ["Open Sans", "serif"],
    },
    extend: {
      maxWidth: {
        maxContentWidth: "393px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Hide scrollbar for Webkit browsers */
          "&::-webkit-scrollbar": {
            display: "none",
            width: "100px",
          },
          /* Hide scrollbar for other browsers */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
