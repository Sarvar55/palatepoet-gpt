import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          500: "#FF6363;",
          800: "#FF1313;",
        },
        green: {
          hover: "#c7f1d6",
          secondary: "#10B981",
          primary: "#45D310",
        },
        white: "#FFFFFF",
        black: {
          light: "#D5D1DB",
          primary: "#141414",
        },
        gray: "#9cA3Af",
        page: {
          error: "#DF1642",
          success: "#18A957",
          info: "#1E90FF",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [],
};
export default config;
