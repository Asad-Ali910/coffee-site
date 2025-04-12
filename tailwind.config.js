module.exports = {
    content: [/* your paths */],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 1.2s ease-out both',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }
  