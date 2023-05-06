/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'background1':'url(/pages/backgrounds/bg3.jpg)'
      },
      spacing:{
        '85':'22rem',
      },
      colors:{
        'royal-blue': {
          '50': '#f0f5fe',
          '100': '#dee8fb',
          '200': '#c4d8f9',
          '300': '#9bbef5',
          '400': '#6c9cee',
          '500': '#3d70e6',
          '600': '#345cdc',
          '700': '#2b49ca',
          '800': '#293ca4',
          '900': '#263782',
          '950': '#1c244f',
      },
      
      
      }
    },
  },
  plugins: [],
}
