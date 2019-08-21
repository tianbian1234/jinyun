import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const WEBFACE_LIST_REQUERY = 'WEBFACE_LIST_REQUERY';
export const WEBFACE_LIST_SUCCESS = 'WEBFACE_LIST_SUCCESS';
export const WEBFACE_LIST_FAILURE = 'WEBFACE_LIST_FAILURE';


//截图
export function fetchWebFaceList() {
  return {
    [FETCH_API]: {
      types: [WEBFACE_LIST_REQUERY, WEBFACE_LIST_SUCCESS, WEBFACE_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/webFace',
      method: 'GET',
    }
  }
}

// 历史上的今天
export const HISTORYTODAY_LIST_REQUERY = 'HISTORYTODAY_LIST_REQUERY';
export const HISTORYTODAY_LIST_SUCCESS = 'HISTORYTODAY_LIST_SUCCESS';
export const HISTORYTODAY_LIST_FAILURE = 'HISTORYTODAY_LIST_FAILURE';

export function fetchHistoryTodayList() {
  return {
    [FETCH_API]: {
      types: [HISTORYTODAY_LIST_REQUERY, HISTORYTODAY_LIST_SUCCESS, HISTORYTODAY_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/historyData',
      method: 'GET',
    }
  }
}

// 最新稿件
export const LATESTNEWS_LIST_REQUERY = 'LATESTNEWS_LIST_REQUERY';
export const LATESTNEWS_LIST_SUCCESS = 'LATESTNEWS_LIST_SUCCESS';
export const LATESTNEWS_LIST_FAILURE = 'LATESTNEWS_LIST_FAILURE';

export function fetchLatestNewsList() {
  return {
    [FETCH_API]: {
      types: [LATESTNEWS_LIST_REQUERY, LATESTNEWS_LIST_SUCCESS, LATESTNEWS_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/latestNews',
      method: 'GET',
    }
  }
}
