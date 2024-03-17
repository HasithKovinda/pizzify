/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#f29f05",
        lightGray: "#64748b",
      },
      backgroundImage: {
        linearGradient: "30deg, #f29f05 50%, transparent 50%",
      },
    },
  },
  plugins: [],
};
