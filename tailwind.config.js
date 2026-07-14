/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#08090b',
          50: '#fafafa',
          100: '#f0f0f2',
          200: '#e0e0e4',
          300: '#b0b0b8',
          400: '#80808a',
          500: '#606068',
          600: '#48484e',
          700: '#34343a',
          800: '#1e1e24',
          900: '#121216',
          950: '#06060a',
        },
        accent: {
          DEFAULT: '#6366f1',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent2: {
          DEFAULT: '#a855f7',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        // Keep gold for backward compatibility in any sub-pages
        gold: {
          50: '#fbf6e9',
          100: '#f6eccd',
          200: '#eeda9b',
          300: '#e4c469',
          400: '#d8af45',
          500: '#d4af37',
          600: '#b8902f',
          700: '#936e26',
          800: '#745526',
          900: '#614825',
          950: '#372612',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        luxe: '0.2em',
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #f6eccd 0%, #d4af37 45%, #936e26 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 0 1px rgba(212,175,55,0.35), 0 8px 30px -6px rgba(212,175,55,0.25)',
        'glow': '0 0 60px -10px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 120px -20px rgba(99, 102, 241, 0.25)',
        'glass': '0 8px 32px -8px rgba(0,0,0,0.12)',
        'glass-dark': '0 8px 32px -8px rgba(0,0,0,0.5)',
        'elevated': '0 20px 60px -15px rgba(0,0,0,0.12)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 4s infinite ease-in-out',
        'aurora-drift': 'aurora-drift 22s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        'marquee': 'marquee-scroll 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(3%, -2%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-2%, 3%, 0) scale(0.96)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
