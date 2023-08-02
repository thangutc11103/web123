/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(15, minmax(0, 1fr))',

        // Complex site-specific column configuration
        
      }
    },
  },
  plugins: [],
}