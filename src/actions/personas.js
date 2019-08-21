import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;

export const PERSONAS_LIST_REQUERY = 'PERSONAS_LIST_REQUERY';
export const PERSONAS_LIST_SUCCESS = 'PERSONAS_LIST_SUCCESS';
export const PERSONAS_LIST_FAILURE = 'PERSONAS_LIST_FAILURE';

export function fetchPersonasList (){
  return {
    [FETCH_API]:{
      types: [PERSONAS_LIST_REQUERY, PERSONAS_LIST_SUCCESS, PERSONAS_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/userAnalysis',
      method: 'GET'
    }
  }
}

export const SHOOTING_LIST_REQUERY = 'SHOOTING_LIST_REQUERY';
export const SHOOTING_LIST_SUCCESS = 'SHOOTING_LIST_SUCCESS';
export const SHOOTING_LIST_FAILURE = 'SHOOTING_LIST_FAILURE';

export function fetchShootingList (){
  return {
    [FETCH_API]:{
      types: [SHOOTING_LIST_REQUERY, SHOOTING_LIST_SUCCESS, SHOOTING_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/hitRate',
      method: 'GET'
    }
  }
}

export const USERCARE_LIST_REQUERY = 'USERCARE_LIST_REQUERY';
export const USERCARE_LIST_SUCCESS = 'USERCARE_LIST_SUCCESS';
export const USERCARE_LIST_FAILURE = 'USERCARE_LIST_FAILURE';

export function fetchUserCareList (){
  return {
    [FETCH_API]:{
      types: [USERCARE_LIST_REQUERY, USERCARE_LIST_SUCCESS, USERCARE_LIST_FAILURE],
      origin: true,
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/areaHotNews',
      method: 'GET'
    }
  }
}
