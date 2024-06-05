import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        "84/100": "84%",
        "85/100": "85%",
        "86/100": "86%",
        "87/100": "87%",
        "88/100": "88%",
        "89/100": "89%",
        "90/100": "90%",
        "91/100": "91%",
        "92/100": "92%",
        "93/100": "93%",
        "94/100": "94%",
        "95/100": "95%",
        "96/100": "96%",
        "97/100": "97%",
        "98/100": "98%",
        "99/100": "99%",
      },
      dropShadow: {
        custom: "0 0 5px rgb(210, 210, 210)",
        "custom-login": "0 0 5px rgb(152,152,152)",
      },
      colors: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#D8D8D8",
        quinary: "#DEDEDE",
      },
      textColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#9CA3AF",
        quinary: "#DEDEDE",
        custom: "#1E3554",
      },
      backgroundColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#DEDEDE",
        quinary: "#E5E7EB",
      },
      outlineColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#9CA3AF",
        quinary: "#DEDEDE",
        custom: "#1E3554",
      },
      inset: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "5/100": "5%",
        "15/100": "15%",
        "25/100": "25%",
        "35/100": "35%",
        "38/100": "38%",
        "45/100": "45%",
        "55/100": "55%",
        "65/100": "65%",
        "75/100": "75%",
        "85/100": "85%",
        "95/100": "95%",
      },
      translate: {
        "1.5full": "150%",
        "2full": "200%",
      },
      borderColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#DEDEDE",
        quinary: "#E5E7EB",
        custom: "#1E3554",
      },
      borderWidth: {
        1: "1px",
        1.5: "1.5px",
      },
      height: {
        "100": "28.5rem",
      },
      boxShadow :{
        'custom1' : "0 0 30px -12px rgb(0 0 0 / 0.75)"
      }
    },
  },
  plugins: [],
};
export default config;
