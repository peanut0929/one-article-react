/**
 * title: 每阅
 */
import { connect } from 'dva';
import withStyles from '@material-ui/core/styles/withStyles';
import Article from './components/Article';
import Loading from './components/Loading';

const styles = theme => {
  const headerHeight = theme.mixins.toolbar.minHeight;
  const { spacing } = theme;

  return {
    container: {
      paddingTop: headerHeight + spacing.unit * 3,
      paddingLeft: spacing.unit * 2,
      paddingRight: spacing.unit * 2,
      paddingBottom: spacing.unit * 2
    }
  };
};

const Index = ({ article, classes, loading }) => {
  return (
    <div className={classes.container}>
      {loading && <Loading />}
      {article && !loading && <Article {...article} />}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { query } = ownProps.location;
  if (query.type === 'date') {
    return {
      loading: state.loading.models.article,
      article: state.article.items[query.date]
    };
  }
  return {
    loading: state.loading.models.article,
    article: state.article.current
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Index));
