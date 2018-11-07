import { connect } from 'dva';
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

const styles = theme => ({
  toolbar: {
    color: theme.palette.common.white,
  },
  menuIcon: {
    marginLeft: -theme.spacing.unit * 2,
  },
  title: {
    flex: 1,
  },
  modeIcon: {
    marginRight: -theme.spacing.unit * 2,
  },
});

function BasicLayout({
  classes,
  children,
  theme,
  appDrawerOpen,
  openDrawer,
  closeDrawer,
  toggleTheme,
}) {
  const appTheme = createMuiTheme(themes[theme]);
  console.log(appTheme);

  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppDrawer open={appDrawerOpen} onClose={closeDrawer} onOpen={openDrawer} />
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" className={classes.menuIcon} onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            每日一文
          </Typography>
          <IconButton color="inherit" className={classes.modeIcon} onClick={toggleTheme}>
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
    theme: state.app.theme,
    appDrawerOpen: state.app.appDrawerOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDrawer: () =>
      dispatch({
        type: 'app/openDrawer',
      }),
    closeDrawer: () =>
      dispatch({
        type: 'app/closeDrawer',
      }),
    toggleTheme: () =>
      dispatch({
        type: 'app/toggleTheme',
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BasicLayout));
