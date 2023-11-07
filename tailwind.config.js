/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        FoundryMonoline: ["FoundryMonoline-Regular"],
        inter: ["Inter"],
      },
      colors: {
        primary: "#F8F8F8",
        secondary: "#93D39B",
        PrimarytextColor: "#000",
        CartTextColor: "#4F4F4F",
        footerLinkColor: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
