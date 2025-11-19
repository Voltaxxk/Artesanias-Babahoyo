
import type {Config} from 'tailwindcss';

export default  {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   theme: {
    extend: {
      fontFamily: {
        playFairD: ["var(--font-playFairD)"],
        pacifico: ["var(--font-pacifico)"],
        lato: ["var(--font-lato)"],
      },
      colors : {
        'artesanal' : {
            50: '#fffbeb',
            100: '#fef3c7',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
        },
        'acento' : {
            500: '#f97316',
            600: '#ea580c',
        }
      }
    },
  },
  },
  plugins: [],
} satisfies Config;