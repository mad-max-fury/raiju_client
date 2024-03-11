/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: "var(--primary)",
        border: "var(--border-color)",
        tertiary: {
          "50": "var(--tet-50)",
          "100": "var(--tet-100)",
          "200": "var(--tet-200)",
          "300": "var(--tet-300)",
          "500": "var(--tet-500)",
          "600": "var(--tet-600)",
          "700": "var(--tet-700)",
          "800": "var(--tet-800)",
          "900": "var(--tet-900)",
          "950": "var(--tet-950)",
        },
        "gray": {
          "500": "var(--gray-500)",
          "200": "var(--gray-200)",
        },
        "white-lilac": {
          "50": "var(--white-lilac-50)",
          "100": "var(--white-lilac-100)",
          "200": "var(--white-lilac-200)",
          "300": "var(--white-lilac-300)",
          "500": "var(--white-lilac-500)",
          "600": "var(--white-lilac-600)",
          "700": "var(--white-lilac-700)",
          "800": "var(--white-lilac-800)",
          "900": "var(--white-lilac-900)",
          "950": "var(--white-lilac-950)",
        }
      },
    }
  },
  plugins: [
    typography
  ],
} satisfies Config;

export default config;

