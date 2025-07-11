/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["var(--font-roboto)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
