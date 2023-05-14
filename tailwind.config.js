/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens:  {
      sm: '375px',
      md: '640px',
      lg:  '1440px',
      xl:  '1440px',
      '2xl': '1440px',
      
      
    },
    fontFamily: {
      'Poppins':  ['Poppins, sans-serif'],
    },
    extend:{
      colors: {
        Purple: 'hsl(259, 100%, 65%)',
        LightRed: 'hsl(0, 100%, 67%)',      
        White: 'hsl(0, 0%, 100%)',
        OffWhite: 'hsl(0, 0%, 94%)',
        LightGrey: 'hsl(0, 0%, 86%)',
        SmokeyGrey: 'hsl(0, 1%, 44%)',
        OffBlack: 'hsl(0, 0%, 8%)',
        
      }
    }
  },
  plugins: [],
}

