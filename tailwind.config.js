/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_site/**/*.html",
  ],
  // Dark mode disabled (removed setting as it's not needed)
  theme: {
    extend: {
      fontFamily: {
        'nothingyoucoulddo': ['Nothing You Could Do', 'cursive'],
        'signika': ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
