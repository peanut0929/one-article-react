import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TodayIcon from '@material-ui/icons/Today';
import PrevIcon from '@material-ui/icons/FastRewind';
import NextIcon from '@material-ui/icons/FastForward';

const styles = theme => ({
  listIcon: {
    color:
      theme.palette.text.primary === '#777777'
        ? '#777777'
        : 'rgba(0, 0, 0, 0.54)'
  },
  drawerList: {
    width: 200
  }
});

const AppDrawer = ({
  classes,
  open,
  isToday,
  onClose,
  onOpen,
  getPrev,
  getNext,
  getToday,
  getRandom
}) => {
  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <List className={classes.drawerList} onClick={onClose}>
        <ListItem onClick={getPrev}>
          <ListItemIcon className={classes.listIcon}>
            <PrevIcon />
          </ListItemIcon>
          <ListItemText>前一天</ListItemText>
        </ListItem>
        {!isToday && (
          <ListItem onClick={getToday}>
            <ListItemIcon className={classes.listIcon}>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText>今天</ListItemText>
          </ListItem>
        )}
        {!isToday && (
          <ListItem onClick={getNext}>
            <ListItemIcon className={classes.listIcon}>
              <NextIcon />
            </ListItemIcon>
            <ListItemText>后一天</ListItemText>
          </ListItem>
        )}
        <ListItem onClick={getRandom}>
          <ListItemIcon className={classes.listIcon}>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText>随机一天</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default withStyles(styles)(AppDrawer);
