export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baseneue: ['Base Neue', 'sans-serif'],
        heading: ['"Satoshi"', 'sans-serif'],
        ibm: ['IBM Plex Sans', sans-serif],
        bebas: ['var(--font-bebas)'],
      },

      fontWeight: {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}, 

      colors: {
        glass: 'rgba(255,255,255,0.05)',
      },
      animation: {
        'gradient-border': 'gradientMove 5s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

