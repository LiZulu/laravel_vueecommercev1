const defaultTheme = 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.export = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        './index.html',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
