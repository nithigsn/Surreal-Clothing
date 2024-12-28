export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
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
