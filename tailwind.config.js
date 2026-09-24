/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040914',
          900: '#081021',
          800: '#0F1D38',
          700: '#182B52',
          600: '#233E75',
          500: '#30549C',
        },
        gold: {
          400: '#F5E296',
          500: '#D4AF37',
          600: '#B89220',
          700: '#947214',
          light: '#FFF9E6',
        },
        bronze: {
          500: '#B8860B',
          600: '#966D07',
        },
        // Premium Metallic Silver & Chrome Palette
        chrome: {
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
          600: '#64748B',
          700: '#475569',
          metallic: '#E2E8F0',
          shine: '#FFFFFF',
        },
        slateBlue: {
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        emeraldGreen: {
          500: '#10B981',
          600: '#059669',
        },
        fireRed: {
          500: '#EF4444',
          600: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'blue-glow': '0 0 25px rgba(37, 99, 235, 0.25)',
        'chrome-glow': '0 0 25px rgba(226, 232, 240, 0.35)',
        'silver-glow': '0 0 20px rgba(203, 213, 225, 0.25)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(8,16,33,0.95) 0%, rgba(15,29,56,0.92) 50%, rgba(4,9,20,0.98) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFF5CC 0%, #D4AF37 50%, #B89220 100%)',
        'chrome-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 30%, #94A3B8 60%, #CBD5E1 85%, #FFFFFF 100%)',
        'silver-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #CBD5E1 50%, #64748B 100%)',
        'chrome-gold-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #D4AF37 50%, #E2E8F0 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      }
    },
  },
  plugins: [],
}
