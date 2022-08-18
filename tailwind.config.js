/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mukta Mahee', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['Mukta Mahee', '"Open Sans"'],
        'kiteone': ['Kite One'],
        'kalam': ['Kalam'],
        'gloriaaleluya': ['Gloria Hallelujah'],
        'eduqld': ['"Edu QLD Beginner"']
      },
      colors: {
        franklight: {
          100: "#f6fdfd",
          200: "#edfcfb",
          300: "#e4faf8",
          400: "#dbf9f6",
          500: "#d2f7f4",
          600: "#a8c6c3",
          700: "#7e9492",
          800: "#546362",
          900: "#2a3131"
        },
        frankdark: {
          100: "#cdcdcf",
          200: "#9b9ba0",
          300: "#6a6870",
          400: "#383641",
          500: "#060411",
          600: "#05030e",
          700: "#04020a",
          800: "#020207",
          900: "#010103"
        },
        frankdark2: {
          100: "#d0d0d1",
          200: "#a1a1a4",
          300: "#727176",
          400: "#434249",
          500: "#14131b",
          600: "#100f16",
          700: "#0c0b10",
          800: "#08080b",
          900: "#040405"
        },
        frankdark3: {
          100: "#d0d0d1",
          200: "#a1a1a4",
          300: "#727176",
          400: "#434249",
          500: "#14131b",
          600: "#100f16",
          700: "#0c0b10",
          800: "#08080b",
          900: "#040405"
        },
        franbuttons: {
          100: "#e5eaea",
          200: "#cad4d5",
          300: "#b0bfbf",
          400: "#95a9aa",
          500: "#7b9495",
          600: "#627677",
          700: "#4a5959",
          800: "#313b3c",
          900: "#191e1e"
        },
        frankpurple: {
          100: "#ece8fd",
          200: "#d9d1fc",
          300: "#c6bbfa",
          400: "#b3a4f9",
          500: "#a08df7",
          600: "#8071c6",
          700: "#605594",
          800: "#403863",
          900: "#201c31"
        },
        frankpink: {
          100: "#fdd6f3",
          200: "#faace7",
          300: "#f883da",
          400: "#f559ce",
          500: "#f330c2",
          600: "#c2269b",
          700: "#921d74",
          800: "#61134e",
          900: "#310a27"
        },
        frankviolet: {
          100: "#dbd1f5",
          200: "#b7a3ec",
          300: "#9276e2",
          400: "#6e48d9",
          500: "#4a1acf",
          600: "#3b15a6",
          700: "#2c107c",
          800: "#1e0a53",
          900: "#0f0529"
        },
      }
    },
  },
}
