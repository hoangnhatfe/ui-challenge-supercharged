import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-panel-1': 'linear-gradient(106deg, #FFA7A7 0.63%, #A30CB5 56.52%, #00173A 100%)',
        'gradient-panel-icon': 'linear-gradient(171deg, rgba(255, 255, 255, 0.46) -11%, rgba(255, 255, 255, 0.00) 92%), rgba(255, 255, 255, 0.20)',
        'gradient-panel-2': 'linear-gradient(95deg, #3AC4F5 2.68%, #0E0E8A 95.69%)',
      },
      animation: {
        'background-position': 'BackgroundAnimation 3s ease infinite',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
