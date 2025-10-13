import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          yellow: "#FFCC00",
          red: "#D40000"
        }
      },
      fontFamily: {
        display: ["Poppins", "var(--font-poppins)", "sans-serif"],
        sans: ["Inter", "var(--font-inter)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
