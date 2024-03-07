// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15616D", // main color green
          secondary: "#FED766", // sub color yellow
          accent: "#EFF1F3", // base color gray
          warning: "#dc2626", // red
          info: "#2563eb", // blue for links
          error: "#9ca3af", // gray for cancel buttons
        },
      },
    ],
  },
} satisfies Config;
