import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                body: "#1D1F23",
                "light-blue": "rgba(142, 240, 245, 0.80)",
                main: {
                    orange: "#EA580C",
                    "light-blue": "#ABD1F1",
                    "gray-40": "#A9A9A9",
                    "light-gray": "#D1D1D1",
                    blue: "#3CA3FC",
                    "stone-50": "#FAF7F5",
                    "text-color": "#10172A",
                    error: "#BB2124",
                    discount: "#C60000",
                },
            },
        },
    },
    plugins: [],
};
export default config;
