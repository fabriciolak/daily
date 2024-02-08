import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'border': '#464646',
      'text': '#FFFFFF',
      'background': '#000000',
      'card-background': '#151515',
      'card-foreground': '#171717',
      'card-tertiary': '#1B1B1B'
    },
  },
  plugins: [],
}
export default config
