/**
 * title: 每阅
 */
import { connect } from 'dva';
import withStyles from '@material-ui/core/styles/withStyles';
import Article from './components/Article';

const styles = theme => {
  const headerHeight = theme.mixins.toolbar.minHeight;
  const { spacing } = theme;

  return {
    container: {
      paddingTop: headerHeight + spacing.unit * 3,
      paddingLeft: spacing.unit * 2,
      paddingRight: spacing.unit * 2,
      paddingBottom: spacing.unit * 2,
    },
  };
};

const Index = ({ article, classes }) => {
  return <div className={classes.container}>{article && <Article {...article} />}</div>;
};

const mapStateToProps = state => {
  return {
    article: state.article.current,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Index));
