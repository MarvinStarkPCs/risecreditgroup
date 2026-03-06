import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
                display: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
                body: ['DM Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                rise: {
                    black:  '#1A1A1A',
                    marble: '#C8C8C8',
                    shadow: '#D0CCCC',
                    cream:  '#FAF8F4',
                    gold:        '#C9A84C',
                    'gold-bright': '#F0C040',
                    'gold-dark':   '#8B6914',
                    muted:  '#6b6560',
                },
            },
        },
    },

    plugins: [forms],
};
