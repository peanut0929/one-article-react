import { fetchArticle } from './services';

export default {
  namespace: 'article',
  state: {
    current: null,
    items: {},
  },
  reducers: {
    saveArticle(state, { payload }) {
      const { article } = payload;
      const {
        date: { curr },
      } = article;

      state.current = article;
      state.items[curr] = article;
    },
  },
  effects: {
    *fetchArticle({ payload }, { call, put, select }) {
      try {
        const { items } = yield select(state => state.article);
        const { type, date } = payload;

        if (type === 'date' && date && items[date]) return;

        const response = yield call(fetchArticle, type, date);
        const { data: article } = yield response.json();

        yield put({
          type: 'saveArticle',
          payload: { article },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetchArticle',
            payload: {
              type: 'today',
            },
          });
        }
      });
    },
  },
};
