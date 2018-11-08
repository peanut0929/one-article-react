export const urls = {
  today: 'https://interface.meiriyiwen.com/article/today?dev=1',
  random: 'https://interface.meiriyiwen.com/article/random?dev=1',
  date: 'https://interface.meiriyiwen.com/article/day?dev=1&date='
};

export const themes = {
  light: {
    palette: {
      primary: {
        main: '#3f50b5'
      },
      secondary: {
        main: '#f44336'
      },
      background: {
        default: '#fafafa',
        paper: '#fff'
      }
    },
    typography: {
      useNextVariants: true
    }
  },
  dark: {
    palette: {
      primary: {
        main: '#2c2c2c'
      },
      secondary: {
        main: '#852508'
      },
      background: {
        default: '#333333',
        paper: '#333'
      },
      text: {
        primary: '#777777'
      },
      divider: '#3b3b3b'
    },
    typography: {
      useNextVariants: true
    }
  }
};
