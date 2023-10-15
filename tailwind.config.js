/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f2bfb0",
        
"secondary": "#e0906b",
        
"accent": "#364ba0",
        
"neutral": "#29232e",
        
"base-100": "#ffffff",
        
"info": "#879ce8",
        
"success": "#1d914b",
        
"warning": "#f7b950",
        
"error": "#db2427",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
