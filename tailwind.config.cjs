/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        extend: {
            colors: {
                "pallet-yellow": "#fff159",
                "pallet-blue": "#3483fa",
            },
            fontFamily: {
                proxima: ["'Proxima Nova'"],
            },
        },
    },
    plugins: [],
};
