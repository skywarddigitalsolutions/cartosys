import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			verde: '#6D8373', /*verde*/
			verdeoscuro: '#4e6a61', /*verde oscuro*/
			bordoclaro: '#703e3f',  /*bordo violeta de los cuadrados de servicios*/
  			bordo: '#7a3c3b', /*bordo detalles minimos*/
  			bordofondo: '#5A2B2B', /* bordo fondo */
			negro: "#272727", 
  			blanco: '#f1f1f1',
  			

  		},

  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
