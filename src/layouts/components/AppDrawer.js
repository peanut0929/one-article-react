import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TodayIcon from '@material-ui/icons/Today';
import PrevIcon from '@material-ui/icons/FastRewind';
import NextIcon from '@material-ui/icons/FastForward';

const styles = {
  drawerList: {
    width: 200,
  },
};

const AppDrawer = ({ classes, open, onClose, onOpen }) => {
  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <List className={classes.drawerList}>
        <ListItem>
          <ListItemIcon>
            <PrevIcon />
          </ListItemIcon>
          <ListItemText>前一天</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText>今天</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NextIcon />
          </ListItemIcon>
          <ListItemText>后一天</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText>随机一天</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default withStyles(styles)(AppDrawer);
