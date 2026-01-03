import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'neon-cyan': '#00f3ff', // Adjust as needed
                'electric-purple': '#bf00ff', // Adjust as needed
            },
        },
    },
    plugins: [],
};
export default config;
