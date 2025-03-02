/* eslint-disable perfectionist/sort-objects */
/** @type {import('tailwindcss').Config} */
import containerQueries from "@tailwindcss/container-queries";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark" (Storybook)
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [containerQueries, require("tailwindcss-animate")],
  theme: {
  	boxShadow: {
  		'3xl': '0px 10px red'
  	},
  	extend: {
  		animation: {
  			backgroundMovement: '0.7s cubic-bezier(0.33, 1, 0.68, 1) 0s 2 forwards backgroundMovement',
  			'mt-fadeInOut': 'mt-fadeInOut 1.25s ease-in-out infinite',
  			'mt-backgroundPulse': '4s ease-in-out infinite mt-backgroundPulse'
  		},
  		backgroundImage: {
  			'mt-ai-looping-gradient-with-border': 'linear-gradient(white, white), linear-gradient(to right, rgb(82, 100, 255), rgb(255, 136, 255), rgb(255, 153, 102), rgb(255, 136, 255), rgb(82, 100, 255))',
  			'mt-ai-looping-gradient': 'linear-gradient(to right, rgb(82, 100, 255), rgb(255, 136, 255), rgb(255, 153, 102), rgb(255, 136, 255), rgb(82, 100, 255))'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			color: 'rgb(var(--color))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			surface: 'rgb(var(--surface-color))',
  			'surface-shadow': 'rgb(var(--shadow-color))',
  			link: 'rgb(var(--link-underline))',
  			interactive: 'rgb(var(--interactive))',
  			'interactive-disabled': 'rgb(var(--interactive-disabled))',
  			'interactive-hover': 'rgb(var(--interactive-hover))',
  			'interactive-focus': 'rgb(var(--interactive-focus))',
  			text: 'var(--color)',
  			'mt-alpha-black': {
  				'50': 'rgba(0, 0, 0, 0.05)',
  				'100': 'rgba(0, 0, 0, 0.12)'
  			},
  			'mt-gray': {
  				'50': 'rgb(242 241 237)',
  				'100': 'rgb(222 221 215)',
  				'700': 'rgb(68 68 68)',
  				'800': 'rgb(48 48 48)'
  			},
  			'mt-purple': {
  				'50': 'rgb(240 239 255)',
  				'100': 'rgb(216 215 248)',
  				'700': 'rgb(66 59 114)',
  				'800': 'rgb(48 43 85)'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		containers: {
  			'2xs': '16rem',
  			xs: '20rem',
  			sm: '24rem',
  			md: '28rem',
  			lg: '32rem',
  			xl: '36rem',
  			'2xl': '42rem',
  			'3xl': '48rem',
  			'4xl': '56rem',
  			'5xl': '64rem',
  			'6xl': '72rem',
  			'7xl': '80rem'
  		},
  		fontFamily: {
  			nav0: [
  				'var(--font-jacquard)'
  			],
  			nav1: [
  				'var(--font-irish-grover)'
  			],
  			nav2: [
  				'var(--font-kablammo)'
  			],
  			nav3: [
  				'var(--font-league-script)'
  			],
  			nav4: [
  				'var(--font-oi)'
  			]
  		},
  		keyframes: {
  			backgroundMovement: {
  				'0%': {
  					backgroundPosition: '200% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			},
  			'mt-fadeInOut': {
  				'0%, 100%': {
  					opacity: 0
  				},
  				'50%': {
  					opacity: 100
  				}
  			},
  			'mt-backgroundPulse': {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
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
};
