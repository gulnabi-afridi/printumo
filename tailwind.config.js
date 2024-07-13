/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        
        gray:{
          1:'#F1ECFF',
          2:'#F9F9FA'
        },
        hoverBg:'#F1ECFF',
    
        black:{
          1:'#000000',
          2:'#171717'
        },
        white:{
          1:'#ffffff',
          2:'#D4D4DA'
        },
        purple:{
          1:'#7B53E7'
        }
      }
    },
  },
  plugins: [],
}

