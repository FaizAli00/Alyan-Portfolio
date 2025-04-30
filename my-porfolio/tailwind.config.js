/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        lg: "16px",
      },
      colors: {
        primary: "#93F2FF",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        heading: "#F8F6FD",
        body: "#D7D9FF",
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderColor: {
        "custom-white": "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        fadeOut: "fadeOut 10s ease-in-out forwards",
        "slow-spin": "spin 3s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          fadeOut: {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  animation: {
  'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
    fadeOut: 'fadeOut 10s ease-in-out forwards',
    'slow-spin': 'spin 3s linear infinite',
    spin: 'spin 1s linear infinite',
},
        },
      },
      transitionDelay: {
        100: "100ms",
        200: "200ms",
      },
    },
  },
  plugins: [],
};
