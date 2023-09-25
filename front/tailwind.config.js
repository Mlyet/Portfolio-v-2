/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   'ph': '100px',
    //   'tab': '430px',
    //   // => @media (min-width: 640px) { ... }

    //   'lap': '770px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desk': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // }
  },
  plugins: [],
}