/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"1.5rem"
        }
      },
      fontFamily:{
        roboto:["Roboto Condensed","sans-serif"]
      }
    },
  },
  plugins: [],
}

