/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './features/**/*.{js,ts,jsx,tsx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: true,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans Display', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'custom-kondominios-blue': '#818cf8',
                'custom-kondominios-blue-dark': '#3730a3',
            },
        },
    },
    plugins: [],
};
