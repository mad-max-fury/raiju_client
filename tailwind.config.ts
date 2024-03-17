/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      fontSize: {
        // Header element styles
        "h-1": ["3.25rem", { lineHeight: "110%", fontWeight: 600 }],
        "h-2": ["2.75rem", { lineHeight: "110%", fontWeight: 600 }],
        "h-3": ["2.25rem", { lineHeight: "110%", fontWeight: 600 }],
        "h-4": ["1.75rem", { lineHeight: "110%", fontWeight: 600 }],
        "h-5": ["1.25rem", { lineHeight: "110%", fontWeight: 600 }],
        "h-6": ["1rem", { lineHeight: "110%", fontWeight: 600 }],

        // Body variant styles - [Large, Medium, Regular, Small]
        "body-l": ["1.25rem", { lineHeight: "140%", fontWeight: 400 }],
        "body-m": ["1.125rem", { lineHeight: "140%", fontWeight: 400 }],
        "body-r": ["1rem", { lineHeight: "140%", fontWeight: 400 }],
        "body-s": ["0.875rem", { lineHeight: "140%", fontWeight: 400 }],
        "caption-s": ["0.75rem", { lineHeight: "140%", fontWeight: 400 }],
      },
      borderRadius: {
        xxl: "30px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        border: "var(--border-color)",
        secondary: "var(--secondary)",
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
        gray: {
          "1": "var(--gray-1)",
          "500": "var(--gray-500)",
          "600": "var(--gray-600)",
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
        },
        info: "var(--info)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      screens: {
        mxl: { max: "1279px" },
        // => @media (max-width: 1279px){...}

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px){...}

        mmd: { max: "767px" },
        // => @media (max-width: 767px){...}

        msm: { max: "639px" },
        // => @media (max-width: 639px){...}

        mxs: { max: "480px" },
        // => @media (max-width: 480px){...}

        mxxs: { max: "400px" },
        // => @media (max-width: 400px){...}

        mxxxs: { max: "320px" },
        // => @media (max-width: 320px){...}

        "ms-height": { raw: "(max-height: 700px)" },

        "mxl-height": { raw: "(max-height: 850px)" },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
