export default {
  namespace: 'app',
  state: {
    theme: 'light',
    appDrawerOpen: false,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    openDrawer(state) {
      state.appDrawerOpen = true;
    },
    closeDrawer(state) {
      state.appDrawerOpen = false;
    },
  },
};
