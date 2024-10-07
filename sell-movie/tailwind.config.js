/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kh: ["Kh", "sans-serif"], // Add custom font
        ju: ["juju", "sans-serif"], // Add custom font
      },
    },
  },
  plugins: [],
};
