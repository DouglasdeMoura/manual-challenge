import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			manual: {
  				sage: {
  					DEFAULT: '#a5b79f',
  					light: '#e8efe9'
  				},
  				teal: {
  					DEFAULT: '#0b3b3c',
  					light: '#6d8a83'
  				},
  				red: {
  					DEFAULT: '#7e0606',
  					hover: '#741919'
  				},
  				gray: {
  					'100': '#f3f7f4',
  					'200': '#EAEAEA',
  					'300': '#CCCCCC',
  					'400': '#999999',
  					'500': '#666666',
  					'600': '#444444'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
