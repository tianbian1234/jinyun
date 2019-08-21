import { FETCH_ASYNC } from "tool/middleware2.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const SEVEN_LIST_REQUERY = 'SEVEN_LIST_REQUERY';
export const SEVEN_LIST_SUCCESS = 'SEVEN_LIST_SUCCESS';
export const SEVEN_LIST_FAILURE = 'SEVEN_LIST_FAILURE';

export function fetchList() {
  return {
    [FETCH_ASYNC ]: {
      types: [SEVEN_LIST_REQUERY, SEVEN_LIST_SUCCESS, SEVEN_LIST_FAILURE],
      endpoint: ['/enorth-screen/r/screen_api/v1.0/api/focusEvent', '/api/event'],
      origin: [true, false],
      method: ['GET', 'GET'],
      body: resfulApi.toutiao,
      callBack: function(result) {
        return { id: result.trsId}
      }
    }
  }
}
