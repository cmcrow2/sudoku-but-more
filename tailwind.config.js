/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				accentblue: '#CAEBF2',
				carbon: {
					100: '#A9A9A9',
					200: '#262626'
				},
				watermelon: '#FF3B3F',
				paper: '#EFEFEF'
			}
		}
	},
	plugins: []
};
