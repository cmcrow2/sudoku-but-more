/** @type {import('tailwindcss').Config} */
export default {
	future: {
		hoverOnlyWhenSupported: true
	},
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
			},
			fontFamily: {
				hepta: ['Hepta Slab']
			},
			animation: {
				border: 'border 4s ease infinite'
			},
			keyframes: {
				border: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			}
		}
	},
	plugins: []
};
