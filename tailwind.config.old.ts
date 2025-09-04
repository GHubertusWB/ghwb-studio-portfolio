import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        // Custom text colors
        'text-primary': "#2d3748", // Dunkelblau für Light Mode
        'text-secondary': "#2d374870", // Dunkelblau 70% für Beschreibungen
        'text-hint': "#2d374850", // Dunkelblau 50% für Hints
        'text-subtle': "#2d374860", // Dunkelblau 60% für subtile Texte
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["var(--font-playfair-display)", "Playfair Display", "serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      fontSize: {
        // Standard Tailwind Größen überschreiben/erweitern
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        
        // Semantische Größen für Typography System
        'display': ['4.5rem', { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.025em' }],
        'h1': ['3.75rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.025em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.025em' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.025em' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        
        // Body Text Größen
        'body-xl': ['1.25rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        
        // Utility Größen
        'caption': ['0.75rem', { lineHeight: '1rem' }],
        'label': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'hint': ['0.75rem', { lineHeight: '1rem' }],
        'meta': ['0.625rem', { lineHeight: '1rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }],
      },
      fontWeight: {
        // Standard Tailwind Gewichte
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
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        
        // Copy Text
        '.text-copy-large': {
          fontSize: '1.125rem',
          lineHeight: '1.75',
          color: 'var(--muted-foreground)',
          maxWidth: '48rem',
          transition: 'color 0.3s ease-in-out',
        },
        '.text-copy': {
          fontSize: '1rem',
          lineHeight: '1.75',
          color: 'var(--muted-foreground)',
          maxWidth: '32rem',
          transition: 'color 0.3s ease-in-out',
        },
        '.text-copy-small': {
          fontSize: '0.875rem',
          lineHeight: '1.75',
          color: 'var(--muted-foreground)',
          maxWidth: '24rem',
          transition: 'color 0.3s ease-in-out',
        },
        
        // Labels
        '.text-label': {
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'var(--foreground)',
          transition: 'color 0.3s ease-in-out',
        },
        '.text-label-small': {
          fontSize: '0.75rem',
          fontWeight: '500',
          color: 'var(--foreground)',
          transition: 'color 0.3s ease-in-out',
        },
        
        // Hints
        '.text-hint': {
          fontSize: '0.875rem',
          color: 'var(--muted-foreground)',
          opacity: '0.7',
          transition: 'color 0.3s ease-in-out, opacity 0.3s ease-in-out',
        },
        '.text-hint-small': {
          fontSize: '0.75rem',
          color: 'var(--muted-foreground)',
          opacity: '0.7',
          transition: 'color 0.3s ease-in-out, opacity 0.3s ease-in-out',
        },
        
        // Special Text
        '.text-caption': {
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'var(--muted-foreground)',
          opacity: '0.8',
          transition: 'color 0.3s ease-in-out, opacity 0.3s ease-in-out',
        },
        '.text-meta': {
          fontSize: '0.75rem',
          fontWeight: '500',
          color: 'var(--muted-foreground)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          opacity: '0.8',
          transition: 'color 0.3s ease-in-out, opacity 0.3s ease-in-out',
        },
        
        // Interactive Text
        '.text-link': {
          color: 'var(--foreground)',
          cursor: 'pointer',
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: 'var(--muted-foreground)',
          },
        },
        '.text-link-subtle': {
          color: 'var(--muted-foreground)',
          cursor: 'pointer',
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: 'var(--foreground)',
          },
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
};

export default config;
