import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#080b0f", panel: "#0e1319", raised: "#141b23", line: "#24303a", signal: "#ff3b5c", fog: "#a5b1b5" }, fontFamily: { sans: ["var(--font-manrope)"], mono: ["var(--font-mono)"] } } }, plugins: [] };
export default config;
