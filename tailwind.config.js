// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        FoxCat: ['Fox Cat', 'sans-serif'],
        GuestCheck: ['Guest Check', 'sans-serif'],
        Pacifico: ['pacifico', 'sans-serif'],
        GillSansNova: ['gill-sans-nova', 'sans-serif'],
        FellRomanSc: ['Historical', 'serif'],
        FellRoman: ['Historical-Roman', 'serif'],
      },
      colors: {
        fc: {
          black: '#231f20',
          dark_green: '#183a1c',
          olive_green: '#313a18',
          green: '#265529',
          tan: '#9b9472',
          red: '#ae2724',
          mdgray: '#989898',
          dkgray: '#555452',
          rust: '#995b27',
        }
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
