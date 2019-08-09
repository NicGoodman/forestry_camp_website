// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        FoxCat: ['Fox Cat', 'sans-serif'],
        GuestCheck: ['Guest Check', 'sans-serif'],
        Pacifico: ['pacifico', 'sans-serif'],
        GillSansNova: ['gill-sans-nova', 'sans-serif'],
        FellRomanSc: ['Historical', 'sans-serif'],
      },
      colors: {
        fc: {
          black: '#231f20',
          dark_green: '#183a1c',
          olive_green: '#313a18',
          green: '#265529',
          tan: '#9b9472',
          red: '#ae2724',
          md_gray: '#989898',
          dk_gray: '#555452',
        }
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
