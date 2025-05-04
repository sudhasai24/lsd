/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          100: '#E4E7F2',
          200: '#C5CBE3',
          300: '#9AA1C8',
          400: '#7A82AD',
          500: '#5A6392',
          600: '#444B6E',
          700: '#303549',
          800: '#1C1F2E',
          900: '#0B0B2B',
        },
        nebula: {
          100: '#E9D3FF',
          200: '#D4A7FF',
          300: '#BF7BFF',
          400: '#A94FFF',
          500: '#8F23FF',
          600: '#7200E0',
          700: '#5600A8',
          800: '#3A0070',
          900: '#1E0038',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};