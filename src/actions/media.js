import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const DEPTNEWSCOUNT_LIST_REQUERY = 'DEPTNEWSCOUNT_LIST_REQUERY';
export const DEPTNEWSCOUNT_LIST_SUCCESS = 'DEPTNEWSCOUNT_LIST_SUCCESS';
export const DEPTNEWSCOUNT_LIST_FAILURE = 'DEPTNEWSCOUNT_LIST_FAILURE';

export function fetchDeptNewsCount() {
  return {
    [FETCH_API]: {
      types: [DEPTNEWSCOUNT_LIST_REQUERY, DEPTNEWSCOUNT_LIST_SUCCESS, DEPTNEWSCOUNT_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/deptNewsCount',
      origin: true,
      method: 'GET',
      body: {}
    }
  }
}
