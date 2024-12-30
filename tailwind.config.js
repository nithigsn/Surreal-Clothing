export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your source files
    "./node_modules/@mui/**/*.{js,jsx,ts,tsx}", // Include MUI components
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        exl:"350px",
        lw: "400px",
        mdd: "460px",
        bsm: "520px",
        sm: "620px",
        md: "767px",
        lg: "1024px",
        exl: "1580px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
