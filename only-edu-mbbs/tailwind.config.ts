import type { Config } from "tailwindcss";
interface Theme {
  (path: string): string | Record<string, string | number>;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
          
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h2:{
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            h4:{
               fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            //   p:{
            // color:theme("dark:colors.gray.300 colors.dark")
            // },
          },
        },
        invert: {
          css: {
            p:{
            color:theme("colors.gray.200")
            },
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        light: "#f4f2ee",
        dark: "#09090b",
        accent: "#a1a1aa",
        foreground: "#27272a",
        secondary: "#A1A1A1",
        bluelink: "#2463eb",
        error: "#ff3333",
        border: "#3a3a3a",
        borderLight: "#c7c7c7",
        attempted: "#006400",
        MarkAnswered: "#c49102",
        visited: "#E1361B",
        currQuestion: "#115e5d",
        notVisited: "#fff",
        marked: "#1D8CE0",
        greenDark:"#041a19",
        'only-orange': {
          50: '#fffbea',
          100: '#fff3c5',
          200: '#ffe587',
          300: '#ffd248',
          400: '#ffbd1e',
          500: '#fc9b04',
          600: '#ef7b00',
          700: '#b94e04',
          800: '#963c0a',
          900: '#7b320c',
          950: '#471801',
      },
      'only-green': {
        50: '#f0fdfb',
        100: '#ccfbf3',
        200: '#99f6e9',
        300: '#5eeadb',
        400: '#2dd4c8',
        500: '#14b8af',
        600: '#0d948f',
        700: '#0f7673',
        800: '#115e5d',
        900: '#134e4d',
        950: '#042e2f',
     },   
    }, 
    screens: {
    'xs': '420px',
  },  
 },
},
  plugins: [require('@tailwindcss/typography')],
};
export default config;
