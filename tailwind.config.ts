import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral base
        cream: {
          50: '#FEFDF9',
          100: '#FDF8F2',
          200: '#FAF0E5',
          300: '#F5E2D0',
        },
        // Deep typography
        charcoal: {
          900: '#1a1a1a',
          800: '#2d2d2d',
        },
        // Soft accent gradients
        sky: {
          100: '#F0F7FF',
          200: '#E1F0FF',
          400: '#89D4FF',
          500: '#5BC0DE',
        },
        sage: {
          100: '#F0FAF7',
          200: '#D9F0EC',
          400: '#6FBB9A',
          500: '#4FA377',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Editorial scale
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
        '4xl': ['40px', { lineHeight: '48px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['60px', { lineHeight: '72px' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 32px rgba(91, 192, 222, 0.15)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, rgba(240, 247, 255, 0.4) 0%, rgba(240, 250, 247, 0.4) 100%)',
        'gradient-text': 'linear-gradient(135deg, #5BC0DE 0%, #4FA377 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
