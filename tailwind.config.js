/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "my-grey": "#F5F5F5",
        "my-dark": "#131111",
        "my-grey-1": "#7D7D7D",
      },

      fontFamily: {
        body: ["Raleway", "sans-serif"],
      },

      gridTemplateColumns: {
        3: "repeat(3, auto)",
        4: "repeat(4, 26px)",
        5: "repeat(5, auto)",
      },
    },
  },
  plugins: [],
};
