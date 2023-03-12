/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        extend: {
            colors: {
                "pallet-yellow": "#fff159",
                "pallet-blue": "#3483fa",
                "pallet-black-opacity1": "#000000cc",
                "pallet-black-opacity2": "#00000080",
            },
            fontFamily: {
                proxima: ["'Proxima Nova'"],
            },
        },
    },
    plugins: [],
};
