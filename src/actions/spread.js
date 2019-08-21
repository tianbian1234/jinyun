import { FETCH_API } from "tool/middleware.js";

import config from 'config';
const resfulApi = config.resfulApi;

/* 电视收视率排行 */
export const LISTEN_RATIO_REQUERY = 'LISTEN_RATIO_REQUERY';
export const LISTEN_RATIO_SUCCESS = 'LISTEN_RATIO_SUCCESS';
export const LISTEN_RATIO_FAILURE = 'LISTEN_RATIO_FAILURE';
export function fetchListenRatio() {
  return {
    [FETCH_API]: {
      types: [LISTEN_RATIO_REQUERY, LISTEN_RATIO_SUCCESS, LISTEN_RATIO_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/tvRatings',
      method: 'GET',
    }
  }
}

/* 电视收视数排行 */
export const LISTEN_COUNT_REQUERY = 'LISTEN_COUNT_REQUERY';
export const LISTEN_COUNT_SUCCESS = 'LISTEN_COUNT_SUCCESS';
export const LISTEN_COUNT_FAILURE = 'LISTEN_COUNT_FAILURE';
export function fetchListenCount() {
  return {
    [FETCH_API]: {
      types: [LISTEN_COUNT_REQUERY, LISTEN_COUNT_SUCCESS, LISTEN_COUNT_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/radioRatings',
      method: 'GET',
    }
  }
}

/* 宣传词内容 publicity*/
export const PUBLICITY_CONTENT_REQUERY = 'PUBLICITY_CONTENT_REQUERY';
export const PUBLICITY_CONTENT_SUCCESS = 'PUBLICITY_CONTENT_SUCCESS';
export const PUBLICITY_CONTENT_FAILURE = 'PUBLICITY_CONTENT_FAILURE';
export function fetchPublicityContent() {
  return {
    [FETCH_API]: {
      types: [PUBLICITY_CONTENT_REQUERY, PUBLICITY_CONTENT_SUCCESS, PUBLICITY_CONTENT_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/wordCloud',
      method: 'GET',
    }
  }
}

/* 稿件传播排行 */
export const STORY_SPREAD_REQUERY = 'STORY_SPREAD_REQUERY';
export const STORY_SPREAD_SUCCESS = 'STORY_SPREAD_SUCCESS';
export const STORY_SPREAD_FAILURE = 'STORY_SPREAD_FAILURE';
export function fetchStorySpread() {
  return {
    [FETCH_API]: {
      types: [STORY_SPREAD_REQUERY, STORY_SPREAD_SUCCESS, STORY_SPREAD_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      params: resfulApi.spreadStory
    }
  }
}
/*作者传播排行*/
export const AUTHOR_SPREAD_REQUERY = 'AUTHOR_SPREAD_REQUERY';
export const AUTHOR_SPREAD_SUCCESS = 'AUTHOR_SPREAD_SUCCESS';
export const AUTHOR_SPREAD_FAILURE = 'AUTHOR_SPREAD_FAILURE';
export function fetchAuthorSpread() {
  return {
    [FETCH_API]: {
      types: [AUTHOR_SPREAD_REQUERY, AUTHOR_SPREAD_SUCCESS, AUTHOR_SPREAD_FAILURE],
      endpoint: '/api/data',
      method: 'POST',
      body: resfulApi.spreadAuthor
    }
  }
}

/*微信传播排行*/
export const WECHAT_SPREAD_REQUERY = 'WECHAT_SPREAD_REQUERY';
export const WECHAT_SPREAD_SUCCESS = 'WECHAT_SPREAD_SUCCESS';
export const WECHAT_SPREAD_FAILURE = 'WECHAT_SPREAD_FAILURE';
export function fetchWechatSpread() {
  return {
    [FETCH_API]: {
      types: [WECHAT_SPREAD_REQUERY, WECHAT_SPREAD_SUCCESS, WECHAT_SPREAD_FAILURE],
      endpoint: '/api/getwechat',
      method: 'POST',
      body: resfulApi.spreadWechat
    }
  }
}

/*单篇稿件传播路径*/
export const SIGNALPATH_SPREAD_REQUERY = 'SIGNALPATH_SPREAD_REQUERY';
export const SIGNALPATH_SPREAD_SUCCESS = 'SIGNALPATH_SPREAD_SUCCESS';
export const SIGNALPATH_SPREAD_FAILURE = 'SIGNALPATH_SPREAD_FAILURE';
export function fetchSignalPathSpread() {
  return {
    [FETCH_API]: {
      types: [SIGNALPATH_SPREAD_REQUERY, SIGNALPATH_SPREAD_SUCCESS, SIGNALPATH_SPREAD_FAILURE],
      endpoint: '/api/getpublist',
      method: 'GET',
    }
  }
}
