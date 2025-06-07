import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
        mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        "clr-light": "#fff",
        "clr-dark": "#303030",
        "clr-accent": "#16e0bd",
        "clr-darker": "#040b14"
      },
      gridTemplateColumns: {
        portfolio: "repeat(auto-fit, minmax(300px, 1fr))"
      },
      backgroundImage: {
        "developer-img-1": "url(../images/background/developer-photo-1.jpg)",
        "developer-img-2": "url(../images/background/developer-photo-2.jpg)",
        "developer-img-3": "url(../images/background/developer-photo-3.jpg)"
      }
    }
  },
  plugins: []
}

