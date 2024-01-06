/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {}
  }
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#CFC09F',
  //         secondary: '#380D16'
  //       }
  // }
  // ]
  // }
}
