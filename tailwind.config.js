/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "walking-wake": "url('./src/assets/FeaturedArt/walking-wake-large-up.webp')"
      },
      size: {
        clamp: "clamp(20rem, 22rem,25rem)"
      },
      screens: {
        'xs': { 'max': '370px'},
        'sm': {'max':'730px'},
        // => @media (min-width: 640px) { ... }
  
        // 'md': {'max':'900px'},
        'md': '731px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '951px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

