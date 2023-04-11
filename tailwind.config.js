/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		borderRadius: {
			none: '0',
			20: '20px'
		},
		fontSize: {
			12: '0.75rem',
			15: '0.938rem',
			18: '1.125rem',
			24: '1.5rem'
		},
		fontWeight: {
			700: '700',
			500: '500'
		},
		lineHeight: {
			30: '30px',
			25: '25px',
			23: '23px',
			19: '19px',
			15: '15px',
			12: '12px'
		},
		letterSpacing: {
			2.4: '2.4px'
		},
		colors: {
			main_purple: '#635FC7',
			main_purple_hover: '#A8A4FF',
			black: '#000112',
			very_dark_grey: '#20212C',
			dark_grey: '#2B2C37',
			lines_dark: '#3E3F4E',
			medium_grey: '#828FA3',
			lines_light: '#E4EBFA',
			light_grey: '#F4F7FD',
			white: '#fff',
			red: '#EA5555',
			'red-hover': '#FF9898',
			border_input: 'rgba(130, 143, 163, 0.25)'
		},
		boxShadow: {
			drop: '0px 10px 20px rgba(54, 78, 126, 0.25)'
		},
		extend: {}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
