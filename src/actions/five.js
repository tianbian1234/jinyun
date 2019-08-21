import { FETCH_API } from "tool/middleware.js";
import config from 'config';
import md5 from 'md5';

export const HOTWORDS_LIST_REQUERY = 'HOTWORDS_LIST_REQUERY';
export const HOTWORDS_LIST_SUCCESS = 'HOTWORDS_LIST_SUCCESS';
export const HOTWORDS_LIST_FAILURE = 'HOTWORDS_LIST_FAILURE';

export const SCATTERS_LIST_REQUERY = 'SCATTERS_LIST_REQUERY';
export const SCATTERS_LIST_SUCCESS = 'SCATTERS_LIST_SUCCESS';
export const SCATTERS_LIST_FAILURE = 'SCATTERS_LIST_FAILURE';

export const TOPNEW_LIST_REQUERY = 'TOPNEW_LIST_REQUERY';
export const TOPNEW_LIST_SUCCESS = 'TOPNEW_LIST_SUCCESS';
export const TOPNEW_LIST_FAILURE = 'TOPNEW_LIST_FAILURE';

export const QU_LIST_REQUERY = 'QU_LIST_REQUERY';
export const QU_LIST_SUCCESS = 'QU_LIST_SUCCESS';
export const QU_LIST_FAILURE = 'QU_LIST_FAILURE';

export const QUMAN_LIST_REQUERY = 'QUMAN_LIST_REQUERY';
export const QUMAN_LIST_SUCCESS = 'QUMAN_LIST_SUCCESS';
export const QUMAN_LIST_FAILURE = 'QUMAN_LIST_FAILURE';

export const BUMEN_LIST_REQUERY = 'BUMEN_LIST_REQUERY';
export const BUMEN_LIST_SUCCESS = 'BUMEN_LIST_SUCCESS';
export const BUMEN_LIST_FAILURE = 'BUMEN_LIST_FAILURE';

export const BUMENMAN_LIST_REQUERY = 'BUMENMAN_LIST_REQUERY';
export const BUMENMAN_LIST_SUCCESS = 'BUMENMAN_LIST_SUCCESS';
export const BUMENMAN_LIST_FAILURE = 'BUMENMAN_LIST_FAILURE';

export const DP_LIST_REQUERY = 'DP_LIST_REQUERY';
export const DP_LIST_SUCCESS = 'DP_LIST_SUCCESS';
export const DP_LIST_FAILURE = 'DP_LIST_FAILURE';

export const TAG_LIST_REQUERY = 'TAG_LIST_REQUERY';
export const TAG_LIST_SUCCESS = 'TAG_LIST_SUCCESS';
export const TAG_LIST_FAILURE = 'TAG_LIST_FAILURE';

export const A_DIAN_REQUERY = 'A_DIAN_REQUERY';
export const A_DIAN_SUCCESS = 'A_DIAN_SUCCESS';
export const A_DIAN_FAILURE = 'A_DIAN_FAILURE';

export function fetchHotWords() {
  return {
    [FETCH_API]: {
      types: [HOTWORDS_LIST_REQUERY, HOTWORDS_LIST_SUCCESS, HOTWORDS_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/keyword',
      method: 'GET',
      body: {}
    }
  }
}

export function fetchScatters() {
  return {
    [FETCH_API]: {
      types: [SCATTERS_LIST_REQUERY, SCATTERS_LIST_SUCCESS, SCATTERS_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/topcoord',
      method: 'GET'
    }
  }
}

export function fetchTopnew() {
  return {
    [FETCH_API]: {
      types: [TOPNEW_LIST_REQUERY, TOPNEW_LIST_SUCCESS, TOPNEW_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/topnew',
      method: 'GET',
      body: {}
    }
  }
}

export function fetchQu() {
  return {
    [FETCH_API]: {
      types: [QU_LIST_REQUERY, QU_LIST_SUCCESS, QU_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/quhuifu',
      method: 'GET',
      body: {}
    }
  }
}

export function fetchQuman() {
  return {
    [FETCH_API]: {
      types: [QUMAN_LIST_REQUERY, QUMAN_LIST_SUCCESS, QUMAN_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/qumanyi',
      method: 'GET',
      body: {}
    }
  }
}

export function fetchBumen() {
  return {
    [FETCH_API]: {
      types: [BUMEN_LIST_REQUERY, BUMEN_LIST_SUCCESS, BUMEN_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/bumenhuifu',
      method: 'GET',
      body: {}
    }
  }
}

export function fetchBumenman() {
  return {
    [FETCH_API]: {
      types: [BUMENMAN_LIST_REQUERY, BUMENMAN_LIST_SUCCESS, BUMENMAN_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/bumenmanyi',
      method: 'GET',
      body: {}
    }
  }
}

export function fetchDp() {
  const date = new Date();
  const deptId = '1000000000000000';
  const timestamp = date.getTime();

  date.setFullYear(date.getFullYear() - 1);

  const beginDate = date.getTime();
  const endDate = timestamp;
  const action = 'toparea';
  const min = 6;
  const scope = 400;
  const check_num = md5(deptId + beginDate + endDate + min + scope + action + timestamp + '43489hu3qnt4f890gh3q4pga89hgnj2q3');

  return {
    [FETCH_API]: {
      types: [DP_LIST_REQUERY, DP_LIST_SUCCESS, DP_LIST_FAILURE],
      origin: true,
      endpoint: `/enorth-screen/r/screen_api/v1.0/api/toparea`,
      method: 'GET',
      params: {
        deptId,
        beginDate,
        endDate,
        timestamp,
        action,
        min,
        scope,
        check_num
      }
    }
  }
}

export function fetchTag() {
  return {
    [FETCH_API]: {
      types: [TAG_LIST_REQUERY, TAG_LIST_SUCCESS, TAG_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/tag',
      method: 'GET'
    }
  }
}
export function fetchDianJi() {
  return {
    [FETCH_API]: {
      types: [A_DIAN_REQUERY, A_DIAN_SUCCESS, A_DIAN_FAILURE],
      origin:true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/yunScreenHotSpotView',
      method: 'GET'
    }
  }
}
