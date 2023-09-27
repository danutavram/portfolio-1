import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        InterBlack: "InterBlack",
        InterBold: "InterBold",
        InterMedium: "InterMedium",
        InterRegular: "InterRegular",
      },
    },
  },
  // corePlugins: {
  //   aspectRatio: false,
  // },
  plugins: [],
};
export default config
