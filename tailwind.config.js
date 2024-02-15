const colors = require('tailwindcss/colors')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			body: ['FF Tundra', 'Georgia' ,' serif'],
		},
		colors: {
			gray: colors.gray,
			black: colors.black,
			white: colors.white,
			"purple": {
				dark: "#1b191f",
				DEFAULT: "#5d178f",
				light: "#d2d0e2",
			},
			'tumbleweed': {
				'50': '#fbf7f1',
				'100': '#f6ecde',
				'200': '#ecd6bc',
				'300': '#e0b991',
				'400': '#d9a479',
				DEFAULT: '#d9a479',
				'500': '#ca7c45',
				'600': '#bc673a',
				'700': '#9c5132',
				'800': '#7e422e',
				'900': '#663828',
				'950': '#361b14',
			},
			'cyan': {
				'50': '#effbfc',
				'100': '#d7f4f6',
				'200': '#b3e9ee',
				'300': '#7fd7e1',
				'400': '#43bdcd',
				'500': '#2baec2',
				DEFAULT: '#2baec2',
				'600': '#248296',
				'700': '#23697b',
				'800': '#255765',
				'900': '#234956',
				'950': '#12303a',
			},
		}
	},
	plugins: [require('@tailwindcss/typography')],
}
