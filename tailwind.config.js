/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#BF9B30',
          light: '#F2D06B',
          dark: '#8B7022',
        },
        luxury: {
          black: '#1A1A1A',
          dark: '#262626',
          cream: '#F5F0E6',
          gray: '#404040',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF9B30 0%, #F2D06B 50%, #BF9B30 100%)',
      }
    },
  },
  plugins: [],
};
