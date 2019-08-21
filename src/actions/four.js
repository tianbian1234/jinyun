import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const HUBCOUNT_LIST_REQUERY = 'HUBCOUNT_LIST_REQUERY';
export const HUBCOUNT_LIST_SUCCESS = 'HUBCOUNT_LIST_SUCCESS';
export const HUBCOUNT_LIST_FAILURE = 'HUBCOUNT_LIST_FAILURE';

export const SUBHUB_LIST_REQUERY = 'SUBHUB_LIST_REQUERY';
export const SUBHUB_LIST_SUCCESS = 'SUBHUB_LIST_SUCCESS';
export const SUBHUB_LIST_FAILURE = 'SUBHUB_LIST_FAILURE';

export const CENTERMEDIA_LIST_REQUERY = 'CENTERMEDIA_LIST_REQUERY';
export const CENTERMEDIA_LIST_SUCCESS = 'CENTERMEDIA_LIST_SUCCESS';
export const CENTERMEDIA_LIST_FAILURE = 'CENTERMEDIA_LIST_FAILURE';

export const NEWSWEB_LIST_REQUERY = 'NEWSWEB_LIST_REQUERY';
export const NEWSWEB_LIST_SUCCESS = 'NEWSWEB_LIST_SUCCESS';
export const NEWSWEB_LIST_FAILURE = 'NEWSWEB_LIST_FAILURE';

export const COOPERATOR_LIST_REQUERY = 'COOPERATOR_LIST_REQUERY';
export const COOPERATOR_LIST_SUCCESS = 'COOPERATOR_LIST_SUCCESS';
export const COOPERATOR_LIST_FAILURE = 'COOPERATOR_LIST_FAILURE';

export function fetchHubCountData() {
  return {
    [FETCH_API]: {
      types: [HUBCOUNT_LIST_REQUERY, HUBCOUNT_LIST_SUCCESS, HUBCOUNT_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/hubCount',
      origin: true,
      method: 'GET',
    }
  }
}

export function fetchSubHubCountData() {
  return {
    [FETCH_API]: {
      types: [SUBHUB_LIST_REQUERY, SUBHUB_LIST_SUCCESS, SUBHUB_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/subHubCount',
      origin: true,
      method: 'GET',
    }
  }
}

export function fetchCenterMediaData() {
  return {
    [FETCH_API]: {
      types: [CENTERMEDIA_LIST_REQUERY, CENTERMEDIA_LIST_SUCCESS, CENTERMEDIA_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/centralMedia',
      origin: true,
      method: 'GET',
    }
  }
}

export function fetchNewsWebData() {
  return {
    [FETCH_API]: {
      types: [NEWSWEB_LIST_REQUERY, NEWSWEB_LIST_SUCCESS, NEWSWEB_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/newsWebsite',
      origin: true,
      method: 'GET',
    }
  }
}

export function fetchCooperratorData() {
  return {
    [FETCH_API]: {
      types: [COOPERATOR_LIST_REQUERY, COOPERATOR_LIST_SUCCESS, COOPERATOR_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/cooperator',
      origin: true,
      method: 'GET',
    }
  }
}
