/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'authorization': "url('C:/Users/maciejwojtkowiak/Desktop/Booky/booky-front/src/assets/book-bg.avif')"
			},
			fontFamily: {
				'pacifico': ['Pacifico', 'sans-serif']
			}
		},
		container: {
			center: true,
			padding: '2rem',
		  },
		  extend: {
			gridTemplateColumns: {
			  '12': 'repeat(12, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				'2':  'auto 1fr auto'
			}
		  },
	},
	plugins: [],
};
