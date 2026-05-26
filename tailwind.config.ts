import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tiefblau (Wasser/Heizung) + Kupfer-Orange (Handwerk/Wärme)
        ink: {
          DEFAULT: '#0B2545',
          900: '#061629',
          800: '#0B2545',
          700: '#13315C',
        },
        copper: {
          DEFAULT: '#D97706',
          600: '#B45309',
          500: '#D97706',
          400: '#F59E0B',
        },
        steel: {
          50:  '#F4F6F8',
          100: '#E7ECF1',
          200: '#CBD5E1',
          300: '#94A3B8',
          600: '#475569',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};

export default config;
