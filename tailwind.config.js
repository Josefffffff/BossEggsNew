const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                popupsbg: colors.white,
                neutral: colors.zinc,
                primary: colors.zinc,
                primarytxt: colors.white,
                warning: colors.red,
                warningtxt: colors.black,
                error: colors.red,
                errortxt: colors.white,
            },
        },
    },
    variants: {},
    plugins: [],
};
