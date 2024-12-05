import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: "night"
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        night: '#111111ff',
        eerieBlack: '#1E1E1Eff',
        jet: '#313131ff',
        lightCoral: '#EA6C70ff',
        jade: '#47AB6Fff',
        majorelleBlue: '#6A55E0ff',
        blueCrayola: '#3377F8ff',
        pastelPeach: '#FFD1BA',
        softMintGreen: '#D5F9D4',
        powderBlue: '#BEE3F9',
        lavenderHaze: '#E8DAEF',
        lightLemon: '#FFF5BA',
        whiteLowOpacity: 'rgb(255 255 255 / 20%)',
        eerieBlack2: '#232323ff',
        onyx: '#3C3C3Cff',
        jet2: '#2D2D2Dff',
        jet3: '#AEAEAE'
      },
      boxShadow: {
        'custom-shadow': 'inset -2px 0px 2px 1px rgba(255,255,255,0.75)',
        upcomingFocus: '0 0 20px 0px rgb(0 0 0 / 43%);'
      }
    },
  },
  plugins: [
    daisyui,
  ],
};
