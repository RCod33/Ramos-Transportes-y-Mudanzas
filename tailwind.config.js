export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],

  theme: {
    extend: {
      colors: {
        primary: {
          500: "rgb(21 45 73 / <alpha-value>)",
          600: "rgb(36 60 92 / <alpha-value>)",
          700: "rgb(51 84 118 / <alpha-value>)",
        },

        accent: {
          500: "rgb(227 137 34 / <alpha-value>)",
          600: "rgb(203 142 71 / <alpha-value>)",
        },

        hero: {
          dark: "rgb(21 45 73 / <alpha-value>)",
          light: "rgb(36 60 92 / <alpha-value>)",
        },
      },
      fontFamily: {
        Inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
};
