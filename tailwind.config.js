module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
    },
    theme: {
        extend: {
            colors: {
                "susty": "#f08080"
            }
        },
        fontFamily: {
            susty: ["Poppins", "sans-serif"],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}
