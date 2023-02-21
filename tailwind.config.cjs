/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        extend: {
            colors: {
                "pallet-yellow": "#fff159",
            },
            fontFamily: {
                proxima: ["'Proxima Nova'"],
            },
        },
    },
    plugins: [],
};
