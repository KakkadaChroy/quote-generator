/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        }
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1c1c22',
        },
      },
    },
  },
  plugins: [],
}

