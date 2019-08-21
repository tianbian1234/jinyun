import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const TOPIC_LIST_REQUERY = 'TOPIC_LIST_REQUERY';
export const TOPIC_LIST_SUCCESS = 'TOPIC_LIST_SUCCESS';
export const TOPIC_LIST_FAILURE = 'TOPIC_LIST_FAILURE';

export function fetchTopicList() {
  return {
    [FETCH_API]: {
      types: [TOPIC_LIST_REQUERY, TOPIC_LIST_SUCCESS, TOPIC_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/subjects',
      method: 'GET',
    }
  }
}

export const HISTORY_LIST_REQUERY = 'HISTORY_LIST_REQUERY';
export const HISTORY_LIST_SUCCESS = 'HISTORY_LIST_SUCCESS';
export const HISTORY_LIST_FAILURE = 'HISTORY_LIST_FAILURE';

export function fetchHistoryList() {
  return {
    [FETCH_API]: {
      types: [HISTORY_LIST_REQUERY, HISTORY_LIST_SUCCESS, HISTORY_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/historyData',
      method: 'GET',
    }
  }
}
