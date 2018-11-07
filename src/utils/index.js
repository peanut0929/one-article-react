import Grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';

export const urls = {
  today: 'https://interface.meiriyiwen.com/article/today?dev=1',
  random: 'https://interface.meiriyiwen.com/article/random?dev=1',
  date: 'https://interface.meiriyiwen.com/article/day?dev=1&date=',
};

export const themes = {
  light: {
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      background: {
        default: '#fafafa',
      },
      common: {
        white: '#fff',
      },
    },
    typography: {
      useNextVariants: true,
    },
  },
  dark: {
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      background: {
        default: '#333333',
      },
      text: {
        primary: '#777',
      },
      common: {
        white: '#ddd',
      },
    },
    typography: {
      useNextVariants: true,
    },
  },
};
