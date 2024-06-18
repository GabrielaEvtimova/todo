/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(111deg, rgba(61,90,254,1) 0%, rgba(83,109,254,1) 39%, rgba(255,234,0,1) 100%, rgba(255,255,0,1) 100%);",
      },
    },
  },
  plugins: [],
};
