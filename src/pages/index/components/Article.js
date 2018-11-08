import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { themes } from '../../../utils';

const styles = theme => ({
  content: {
    fontSize: '1.2rem'
  },
  wc: {
    marginTop: theme.spacing.unit
  }
});

const Article = ({ title, author, content, date, wc, classes }) => {
  return (
    <div className="article">
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        {author} - {date.curr}
      </Typography>
      <Divider />
      <Typography
        dangerouslySetInnerHTML={{ __html: content }}
        gutterBottom
        className={classes.content + ' article-content'}
      />
      <Divider />
      <Typography
        align="center"
        color="textPrimary"
        className={classes.wc}
        gutterBottom
      >
        {wc}字
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Article);
