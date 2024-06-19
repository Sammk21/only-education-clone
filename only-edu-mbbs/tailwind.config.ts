import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "lg": "1080px",
      },
    },
    extend: {
      typography:{
        DEFAULT:{
          css:{
            figure:{
             marginTop:"0",
             marginBottom:"0",
            },
            table: {
            width:"100%",
            borderWidth: "1px"
            } ,
            th:{
            textAlign:"start",
            backgroundColor: "rgb(249 250 251)",
            paddingTop:"1rem",
            paddingBottom:"1rem"
            },
            td:{
             paddingLeft:"1rem",
             paddingRight:"1rem",
             paddingTop: "0.75rem" ,
             paddingBottom: "0.75rem"
  
            },
            tr:{
             border:"0.5px solid gray"
            },
          }
        }
      },
      screens:{
        '2lg': "1070px",
      }
      ,
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FFB76B 0%, #FFA73D 30%, #FF7C00 60%, #FF7F04 100%)',
      },
     
      colors: {
        transparent: "transparent",
        light: "#fff",
        dark: "#09090b",
        accent: "#a1a1aa",
        foreground: "#27272a",
        secondary: "#A1A1A1",
        bluelink: "#2463eb",
        error: "#ff3333",
        borderLight: "#c7c7c7",
        attempted: "#006400",
        MarkAnswered: "#c49102",
        visited: "#E1361B",
        currQuestion: "#115e5d",
        notVisited: "#fff",
        marked: "#1D8CE0",
        greenDark:"#041a19",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#fff",
  
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
     
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
     
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),  require('@tailwindcss/typography')],
} satisfies Config

export default config