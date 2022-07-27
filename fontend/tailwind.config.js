/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'carImg':"url('assets/img/cover/car_01.jpg')",
        'carImg2':"url('assets/img/cover/car_02.jpg')"
      }
    },
  },
  plugins: [],
}