/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", // For Next.js pages
    "./components/**/*.{js,jsx,ts,tsx}", // For reusable components
    "./app/**/*.{js,jsx,ts,tsx}", // If you're using an `app` directory
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#FCE7F3", // Light pink
          200: "#F9A8D4", // Light pink
          500: "#F472B6", // Main pink (secondary)
          600: "#EC4899", // Dark pink
        },
        primary: {
          100: "#EDE9FE", // Light purple
          200: "#D8B4FE", // Lighter purple
          400: "#A78BFA", // Main purple
          500: "#8B5CF6", // Dark purple (primary)
          600: "#7C3AED", // Darker purple
        },
      },
    },
  },
  plugins: [],
};
