/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
        colors:{

          surface_bleu:"#CFE8F4",
          brand_bleu_inter:"#0E5588",
          brand_bleu_fonce_500:"#011E3E",
          neutral_blanc:"#FDFDFD",
          neutral_gris:"#9CA2A9",

          brand_orange:"#F76E25",
          surface_orange:"#FEF1EA",


          primary_green:"#0E5907",   
          secondary_green:"#265828",   
          tertiary_green:"#ABC5A9", 
          quaternary_green:"#F0F5F0", 
          primary_orange:"#F29000", 
          secondary_orange:"#FDF3E3", 
          primary_gray:"#9CA2A9",
          secondary_gray:"#00000029",
          tertiary_gray:"#DFDFDF",

          primary_red:"#D0101F",
          secondary_red:"#E63F50",
          tertiary_red:"#FFE2E3",

          

        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        boxShadow: {
          custom: "0 -4px 6px rgba(255, 255, 255, 0.4), 0 4px 6px rgba(255, 255, 255, 0.4)",
          glow: "0 4px 20px rgba(66, 153, 225, 0.5)", // Pour un effet lumineux
          inset: "inset 0 2px 4px rgba(0, 0, 0, 0.1)", // Ombre intérieure
        },
        clipPath: {
          custom: "polygon(0 0, 70% 0, 100% 100%, 0 75%)",
        },
  
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

