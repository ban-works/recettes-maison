module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
        './sections/**/*.{js,ts,jsx,tsx}',
        './templates/**/*.{js,jsx,ts,tsx}',
        './components/recipe/**/*.{js,jsx,ts,tsx}',

    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#4cb751',
                'olive-green': '#C6FB55',
                gray: '#7d7d7d',
                'light-gray': '#F9F9F9',
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            sora: ['Sora', 'sans-serif'],
        },
    },
    plugins: [],
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
};
