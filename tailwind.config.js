module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your project structure
    './public/index.html', // Include HTML files if necessary
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#7AC52D',
        brandSecondary:'#AFE274',
        brandYellow: '#E5C050',
        brandBlue: '#AEC0F5', 
        brandNavyblue: '#111827',
      },
    },
  },
  plugins: [],
};