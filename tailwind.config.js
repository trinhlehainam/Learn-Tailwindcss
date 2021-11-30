module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                zelda: {
                    blue: "#0290fe",
                    darkGreen: "#0c1f0c",
                    darkGray: "#2f3124",
                    lightGray: "#616356",
                    yellow: "#FFC800",
                    lightYellow: "#FFFFBE",
                    softYellow: "#f8f7d9",
                },
            },
            boxShadow: {
                yellow: "rgba(255, 255, 190, 0.4) 0px 0px 6px 2px",
            },
            dropShadow: {
                arrow: "0 0 64px #fff, 0 0 66px #fff, 0 0 68px #fff, 0 0 70px #fff, 0 0 72px #fff"
            },
        },
    },
    variants: {
        extend: {
            dropShadow: ["hover", "focus"],
        },
    },
    plugins: [],
}
