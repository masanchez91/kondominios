/** @type {import('tailwindcss').Config} */
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
            colors: {
                'custom-kondominios-blue': '#818cf8',
                'custom-kondominios-blue-dark': '#3730a3',
            },
        },
    },
    plugins: [],
};
