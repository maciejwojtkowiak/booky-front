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
	},
	plugins: [],
};
