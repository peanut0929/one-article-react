import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
  content: {
    fontSize: '1.2rem',
  },
};

const Article = ({ title, author, content, curr, wc, classes }) => {
  return (
    <div className="article">
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        {author}
      </Typography>
      <Divider />
      <Typography
        dangerouslySetInnerHTML={{ __html: content }}
        gutterBottom
        className={classes.content + ' article-content'}
      />
      <Divider />
      <Typography align="center" gutterBottom>
        {wc}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Article);
