import { fetchArticle } from './services';
import router from 'umi/router';

export default {
  namespace: 'article',
  state: {
    current: null,
    items: {}
  },
  reducers: {
    saveArticle(state, { payload }) {
      const { article } = payload;
      const {
        date: { curr }
      } = article;

      state.current = article;
      state.items[curr] = article;
    }
  },
  effects: {
    *fetchArticle({ payload }, { call, put, select }) {
      try {
        const { items } = yield select(state => state.article);
        const { type, date } = payload;

        if (type === 'date' && date && items[date]) {
          yield put({
            type: 'saveArticle',
            payload: {
              article: items[date]
            }
          });
        } else {
          const response = yield call(fetchArticle, type, date);
          const { data: article } = yield response.json();

          yield put({
            type: 'saveArticle',
            payload: { article }
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    *fetchRandomArticle({ payload }, { put }) {
      yield put({
        tpye: 'fetchArticle',
        payload: {
          type: 'random'
        }
      });
    },
    *fetchTodayArticle({ payload }, { put }) {
      yield put({
        tpye: 'fetchArticle',
        payload: {
          type: 'today'
        }
      });
    },
    *fetchDateArticle({ payload }, { select, put }) {
      const { dir } = payload;
      const { current } = yield select(state => state.article);

      const date = dir === 'prev' ? current.date.prev : current.date.next;

      router.push({
        pathname: '/',
        query: {
          type: 'date',
          date
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetchArticle',
            payload: {
              type: query.type || 'today',
              date: query.date
            }
          });
        }
      });
    }
  }
};
