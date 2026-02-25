/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2590f4",
        "primary-hover": "#1a7fdc", // synthesized for hover states
        "background-dark": "#002D56",
        "background-light": "#f0f4f8",
        "card-dark": "#00386b",
        "card-border": "#004685",
        "modal-bg": "#011d38",
        secondary: "#004080",
        accent: "#66b2ff",
        "text-secondary": "#9db9b9",
        glass: "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
      boxShadow: {
        "glow": "0 0 20px rgba(0, 69, 134, 0.5)"
      }
    },
  },
  plugins: [],
}
