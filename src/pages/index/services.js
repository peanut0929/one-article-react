import fetch from 'dva/fetch';
import { urls } from '../../utils';

/**
 * 获取文章详情
 * @param {string} [type='today'] 获取文章的方式  today 每日一文 / random 随机一文 / date 特定某天的文章
 * @param {*} date 特定某天的日期
 * @returns Promise
 */
export const fetchArticle = (type = 'today', date) => {
  if (type === 'date' && !date) {
    throw new Error('请指定日期');
  }
  if (type !== 'today' && type !== 'random') {
    return fetch(urls[type] + date);
  }

  return fetch(urls[type]);
};
