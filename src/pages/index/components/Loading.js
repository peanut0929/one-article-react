import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default loading => (
  <Typography align="center" component="div">
    <CircularProgress color="secondary" />
  </Typography>
);
