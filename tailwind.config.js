/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F3FF',
        secondary: '#BC13FE',
        dark: '#030014',
      },
      boxShadow: {
        'cyan': '0 0 10px rgba(0, 243, 255, 0.5)',
        'purple': '0 0 10px rgba(188, 19, 254, 0.5)',
      },
    },
  },
}
