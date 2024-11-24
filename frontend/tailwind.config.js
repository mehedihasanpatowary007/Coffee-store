/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-bg": "url('/src/assets/images/more/15.jpg')",
        "footer-bg": "url('/src/assets/images/more/24.jpg')",
        "hero-bg": "url('/src/assets/images/more/3.png')",
        "product-bg": "url('/src/assets/images/more/1.png')",
        "contact-bg": "url('/src/assets/images/more/13.jpg')",
        "add-coffee-bg": "url('/src/assets/images/more/11.png')",
        "register-bg": "url('/src/assets/images/more/6.png')",
      },
    },
  },
  plugins: [],
};

