/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blaze-orange': {
          50: '#fff8ec',
          100: '#ffeed3',
          200: '#ffd9a7',
          300: '#ffbe6f',
          400: '#ff9635',
          500: '#ff780e',
          600: '#fb6107', // main
          700: '#c94305',
          800: '#9f360d',
          900: '#802e0e',
        },
        'banana-mania': {
          50: '#fef7ee',
          100: '#feecd6',
          200: '#fcdebe', // main
          300: '#f8b879',
          400: '#f58f42',
          500: '#f1701e',
          600: '#e35613',
          700: '#bc4112',
          800: '#953417',
          900: '#782d16',
        },
        'mountbatten-pink': {
          50: '#f9f6f8',
          100: '#f4eff2',
          200: '#e9e1e6',
          300: '#d9c8d0',
          400: '#c0a6b3',
          500: '#a27e8e', // main
          600: '#936f7d',
          700: '#7c5a66',
          800: '#674d56',
          900: '#58434a',
        },
        'burnt-umber': {
          50: '#fdf3f4',
          100: '#fbe5e6',
          200: '#f8d0d3',
          300: '#f2afb3',
          400: '#e88188',
          500: '#db5860',
          600: '#c73b44',
          700: '#a72e36',
          800: '#88292f', // main
          900: '#74282d',
        },
        'coffee-bean': {
          50: '#fbf9eb',
          100: '#f5f2cc',
          200: '#ede49b',
          300: '#e2ce62',
          400: '#d8ba37',
          500: '#c8a42a',
          600: '#ac8122',
          700: '#8a5f1e',
          800: '#734d20',
          900: '#2e1e0f', // main
        },
      },
    },
  },
  plugins: [],
}
