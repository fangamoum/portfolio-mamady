/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Le bleu vif (FANGAMOU, Accueil)
          dark: '#111111',    // Bleu-noir profond (bouton Me contacter)
          light: '#EFF6FF',
          yellow : '#FFF00F'   // Bleu très clair (fonds de badges)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}