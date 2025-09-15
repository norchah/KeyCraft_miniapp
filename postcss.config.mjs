const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#000a19",   // основной цвет
        },
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
}

export default config
