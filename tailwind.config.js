
 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    raleway : ["Raleway", "sans-serif"],
    opensans: ["Open Sans", "sans-serif"],

    extend: {
      colors: {
        'introne': 'hsl(217, 28%, 15%)',
        'main': 'hsl(218, 28%, 13%)',
        'footer': 'hsl(216, 53%, 9%)',
        'testimonials': 'hsl(219, 30%, 18%)',
        'Cyan': 'hsl(176, 68%, 64%)',
        'Blue': 'hsl(198, 60%, 50%)',
        'LightRed': 'hsl(0, 100%, 63%)',
        'White': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}