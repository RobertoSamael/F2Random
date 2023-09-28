/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
    extend: {
      colors:{
        background: '#1d1d1d'
      },

      fontFamily:{
        title: ['Rubik Iso'],
        body: ['Rubik']
      },
      },
    },
  plugins: [],
}