import { connect } from 'dva';
import router from 'umi/router';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NightModeIcon from '@material-ui/icons/Brightness4';
import DaytimeModeIcon from '@material-ui/icons/Brightness7';
import AppDrawer from './components/AppDrawer';
import { themes } from '../utils';
import dayjs from 'dayjs';

const styles = theme => ({
  toolbar: {
    color: theme.palette.common.white
  },
  menuIcon: {
    marginLeft: -theme.spacing.unit * 2
  },
  title: {
    flex: 1
  },
  modeIcon: {
    marginRight: -theme.spacing.unit * 2
  }
});

function BasicLayout({
  classes,
  children,
  theme,
  today,
  appDrawerOpen,
  openDrawer,
  closeDrawer,
  toggleTheme,
  getPrev,
  getNext,
  getRandom,
  getToday
}) {
  const appTheme = createMuiTheme(themes[theme]);
  const isToday = dayjs().format('YYYYMMDD') === today;

  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppDrawer
        open={appDrawerOpen}
        onClose={closeDrawer}
        onOpen={openDrawer}
        getNext={getNext}
        getToday={getToday}
        getPrev={getPrev}
        getRandom={getRandom}
        isToday={isToday}
      />
      <AppBar>
        <Toolbar
          style={{
            color: theme === 'light' ? '#fff' : '#666'
          }}
        >
          <IconButton
            color="inherit"
            className={classes.menuIcon}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            每日一文
          </Typography>
          <IconButton
            color="inherit"
            className={classes.modeIcon}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <NightModeIcon /> : <DaytimeModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </MuiThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
    today: state.article.current
      ? state.article.current.date.curr
      : dayjs().format('YYYYMMDD'),
    theme: state.app.theme,
    appDrawerOpen: state.app.appDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () =>
      dispatch({
        type: 'app/openDrawer'
      }),
    closeDrawer: () =>
      dispatch({
        type: 'app/closeDrawer'
      }),
    toggleTheme: () =>
      dispatch({
        type: 'app/toggleTheme'
      }),
    getToday: () =>
      router.push({
        pathname: '/',
        query: {
          type: 'today'
        }
      }),
    getRandom: () =>
      router.push({
        pathname: '/',
        query: {
          type: 'random'
        }
      }),
    getPrev: () =>
      dispatch({
        type: 'article/fetchDateArticle',
        payload: {
          dir: 'prev'
        }
      }),
    getNext: () =>
      dispatch({
        type: 'article/fetchDateArticle',
        payload: {
          dir: 'next'
        }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BasicLayout));
