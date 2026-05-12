import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071b3a",
        tealbrand: "#0891b2"
      }
    }
  },
  plugins: []
};

export default config;
