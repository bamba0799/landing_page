/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors:{
          primary_green:"#0E5907",   
          secondary_green:"#265828",   
          tertiary_green:"#4DAF27", 
          primary_orange:"#F29000", 
        }
    },
  },
  plugins: [],
}

