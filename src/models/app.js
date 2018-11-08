export default {
  namespace: 'app',
  state: {
    theme: localStorage.getItem('__APP_THEME__') || 'light',
    appDrawerOpen: false,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('__APP_THEME__', state.theme);
    },
    openDrawer(state) {
      state.appDrawerOpen = true;
    },
    closeDrawer(state) {
      state.appDrawerOpen = false;
    },
  },
};
