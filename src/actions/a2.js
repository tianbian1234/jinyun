import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const MAUNSCRIPT_LIST_REQUERY = 'MAUNSCRIPT_LIST_REQUERY';
export const MAUNSCRIPT_LIST_SUCCESS = 'MAUNSCRIPT_LIST_SUCCESS';
export const MAUNSCRIPT_LIST_FAILURE = 'MAUNSCRIPT_LIST_FAILURE';

export const REPORTER_LIST_REQUERY = 'REPORTER_LIST_REQUERY';
export const REPORTER_LIST_SUCCESS = 'REPORTER_LIST_SUCCESS';
export const REPORTER_LIST_FAILURE = 'REPORTER_LIST_FAILURE';

export const ATTMAP_LIST_REQUERY = 'ATTMAP_LIST_REQUERY';
export const ATTMAP_LIST_SUCCESS = 'ATTMAP_LIST_SUCCESS';
export const ATTMAP_LIST_FAILURE = 'ATTMAP_LIST_FAILURE';

export function fetchManuscriptList() {
  return {
    [FETCH_API]: {
      types: [MAUNSCRIPT_LIST_REQUERY, MAUNSCRIPT_LIST_SUCCESS, MAUNSCRIPT_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/latestNews',
      origin: true,
      method: 'GET',
      body: {}
    }
  }
}

export function fetchReporter() {
  return {
    [FETCH_API]: {
      types: [REPORTER_LIST_REQUERY, REPORTER_LIST_SUCCESS, REPORTER_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/reporterMap',
      origin: true,
      method: 'GET',
      body: {}
    }
  }
}


export function fetchAttmap() {
  return {
    [FETCH_API]: {
      types: [ATTMAP_LIST_REQUERY, ATTMAP_LIST_SUCCESS, ATTMAP_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/attMap',
      origin: true,
      method: 'GET',
      body: {}
    }
  }
}
