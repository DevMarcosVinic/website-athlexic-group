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
                // Brand Colors
                'electric-cyan': '#00F0FF',
                'neon-purple': '#7B2CBF',
                'digital-green': '#00FF94',
                'midnight': '#020B1A',
                'obsidian': '#050505',
            },
            fontFamily: {
                sans: ['var(--font-rajdhani)', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'monospace'],
            },
            keyframes: {
                'fade-in-down': {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.3s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'pulse-slow': 'pulse-slow 3s infinite',
            },
        },
    },
    plugins: [],
};
export default config;
