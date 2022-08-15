/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Frank Ruhl Libre"', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Lexend Deca"', '"Open Sans"'],
        'h1tablon': ['Cabin Sketch'],
        'kiteone': ['Kite One'],
        'kalam': ['Kalam'],
        'gloriaaleluya': ['Gloria Hallelujah'],
        'eduqld': ['"Edu QLD Beginner"']
      },
    },
  }
}
