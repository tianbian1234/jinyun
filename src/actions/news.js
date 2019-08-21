import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const TOUTIAO_LIST_REQUERY = 'TOUTIAO_LIST_REQUERY';
export const TOUTIAO_LIST_SUCCESS = 'TOUTIAO_LIST_SUCCESS';
export const TOUTIAO_LIST_FAILURE = 'TOUTIAO_LIST_FAILURE';

export function fetchToutiaoList() {
  return {
    [FETCH_API]: {
      types: [TOUTIAO_LIST_REQUERY, TOUTIAO_LIST_SUCCESS, TOUTIAO_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.toutiao
    }
  }
}

export const WECHAT_LIST_REQUERY  = 'WECHAT_LIST_REQUERY';
export const WECHAT_LIST_SUCCESS  = 'WECHAT_LIST_SUCCESS';
export const WECHAT_LIST_FAILURE  = 'WECHAT_LIST_FAILURE';

export function fetchWeichatList() {
  return {
    [FETCH_API]: {
      types: [WECHAT_LIST_REQUERY, WECHAT_LIST_SUCCESS, WECHAT_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.wechat
    }
  }
}

export const WEIBO_LIST_REQUERY = 'WEIBO_LIST_REQUERY';
export const WEIBO_LIST_SUCCESS = 'WEIBO_LIST_SUCCESS';
export const WEIBO_LIST_FAILURE = 'WEIBO_LIST_FAILURE';

export function fetchWeiboList() {
  return {
    [FETCH_API]: {
      types: [WEIBO_LIST_REQUERY, WEIBO_LIST_SUCCESS, WEIBO_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.weibo
    }
  }
}

export const MEITI_LIST_REQUERY = 'MEITI_LIST_REQUERY';
export const MEITI_LIST_SUCCESS = 'MEITI_LIST_SUCCESS';
export const MEITI_LIST_FAILURE = 'MEITI_LIST_FAILURE';

export function fetchMeitiList() {
  return {
    [FETCH_API]: {
      types: [MEITI_LIST_REQUERY, MEITI_LIST_SUCCESS, MEITI_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.meiti
    }
  }
}

export const WORD_LIST_REQUERY = 'WORD_LIST_REQUERY';
export const WORD_LIST_SUCCESS = 'WORD_LIST_SUCCESS';
export const WORD_LIST_FAILURE = 'WORD_LIST_FAILURE';

export function fetchWordList() {
  return {
    [FETCH_API]: {
      types: [WORD_LIST_REQUERY, WORD_LIST_SUCCESS, WORD_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.word
    }
  }
}

export const ALL_WORD_LIST_REQUERY = 'ALL_WORD_LIST_REQUERY';
export const ALL_WORD_LIST_SUCCESS = 'ALL_WORD_LIST_SUCCESS';
export const ALL_WORD_LIST_FAILURE = 'ALL_WORD_LIST_FAILURE';

export function fetchAllWordList() {
  return {
    [FETCH_API]: {
      types: [ALL_WORD_LIST_REQUERY, ALL_WORD_LIST_SUCCESS, ALL_WORD_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.all_word
    }
  }
}

export const SPOT_LIST_REQUERY = 'SPOT_LIST_REQUERY';
export const SPOT_LIST_SUCCESS = 'SPOT_LIST_SUCCESS';
export const SPOT_LIST_FAILURE = 'SPOT_LIST_FAILURE';

export function fetchSpotList() {
  return {
    [FETCH_API]: {
      types: [SPOT_LIST_REQUERY, SPOT_LIST_SUCCESS, SPOT_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.spot
    }
  }
}

export const FEEL_LIST_REQUERY = 'FEEL_LIST_REQUERY';
export const FEEL_LIST_SUCCESS = 'FEEL_LIST_SUCCESS';
export const FEEL_LIST_FAILURE = 'FEEL_LIST_FAILURE';

export function fetchFeelList() {
  return {
    [FETCH_API]: {
      types: [FEEL_LIST_REQUERY, FEEL_LIST_SUCCESS, FEEL_LIST_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.feel
    }
  }
}

export const AREA_LIST_REQUERY = 'AREA_LIST_REQUERY';
export const AREA_LIST_SUCCESS = 'AREA_LIST_SUCCESS';
export const AREA_LIST_FAILURE = 'AREA_LIST_FAILURE';

export function fetchAreaList() {
  return {
    [FETCH_API]: {
      types: [AREA_LIST_REQUERY, AREA_LIST_SUCCESS, AREA_LIST_FAILURE],
      endpoint: '/api/area',
      method: 'GET',
    }
  }
}
