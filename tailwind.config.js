/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FoundryMonoline: ["FoundryMonoline-Regular"],
      },
      colors: {
        primary: "#F8F8F8",
        secondary: "#93D39B",
        PrimarytextColor: "#000",
        CartTextColor: "#0C0C0C0C",
        footerLinkColor: "#0C0C0C0C",
      },
    },
  },
  plugins: [],
};
