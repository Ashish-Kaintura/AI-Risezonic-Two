/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      title: ['Outfit', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Outfit', 'serif'],
    },
  },
  plugins: [],
};
