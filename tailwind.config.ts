import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode Palette
        dark: {
          bg: "#0f1117", // Main background - soft dark
          surface: "#161b22", // Card/container surface
          border: "#21262d", // Border color
          text: "#c9d1d9", // Primary text
          muted: "#8b949e", // Muted/secondary text
        },
        accent: {
          cyan: "#00d9ff", // Primary accent - cyan
          teal: "#0ea5b8", // Secondary accent - teal
          hover: "#06b6d4", // Hover state
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      spacing: {
        safe: "max(1rem, env(safe-area-inset-bottom))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
