import { FETCH_API } from "tool/middleware.js";
import config from 'config';
const resfulApi = config.resfulApi;


export const INTAKE_LIST_REQUERY = 'INTAKE_LIST_REQUERY';
export const INTAKE_LIST_SUCCESS = 'INTAKE_LIST_SUCCESS';
export const INTAKE_LIST_FAILURE = 'INTAKE_LIST_FAILURE';

export const RANKAMOUNT_LIST_REQUERY = 'RANKAMOUNT_LIST_REQUERY';
export const RANKAMOUNT_LIST_SUCCESS = 'RANKAMOUNT_LIST_SUCCESS';
export const RANKAMOUNT_LIST_FAILURE = 'RANKAMOUNT_LIST_FAILURE';

export const SUBSCRIBER_LIST_REQUERY = 'SUBSCRIBER_LIST_REQUERY';
export const SUBSCRIBER_LIST_SUCCESS = 'SUBSCRIBER_LIST_SUCCESS';
export const SUBSCRIBER_LIST_FAILURE = 'SUBSCRIBER_LIST_FAILURE';

export const NEWSRELEASE_LIST_REQUERY = 'NEWSRELEASE_LIST_REQUERY';
export const NEWSRELEASE_LIST_SUCCESS = 'NEWSRELEASE_LIST_SUCCESS';
export const NEWSRELEASE_LIST_FAILURE = 'NEWSRELEASE_LIST_FAILURE';

export const DOWNLOAD_LIST_REQUERY = 'DOWNLOAD_LIST_REQUERY';
export const DOWNLOAD_LIST_SUCCESS = 'DOWNLOAD_LIST_SUCCESS';
export const DOWNLOAD_LIST_FAILURE = 'DOWNLOAD_LIST_FAILURE';

export const VERSION_LIST_REQUERY = 'VERSION_LIST_REQUERY';
export const VERSION_LIST_SUCCESS = 'VERSION_LIST_SUCCESS';
export const VERSION_LIST_FAILURE = 'VERSION_LIST_FAILURE';

export const NETWORK_LIST_REQUERY = 'NETWORK_LIST_REQUERY';
export const NETWORK_LIST_SUCCESS = 'NETWORK_LIST_SUCCESS';
export const NETWORK_LIST_FAILURE = 'NETWORK_LIST_FAILURE';

export const EQUIPMENT_LIST_REQUERY = 'EQUIPMENT_LIST_REQUERY';
export const EQUIPMENT_LIST_SUCCESS = 'EQUIPMENT_LIST_SUCCESS';
export const EQUIPMENTLIST_FAILURE = 'EQUIPMENT_LIST_FAILURE';


export function fetchIntakeList() {
  return {
    [FETCH_API]: {
      types: [INTAKE_LIST_REQUERY, INTAKE_LIST_SUCCESS, INTAKE_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/jcAccountCount',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchRankamountList() {
  return {
    [FETCH_API]: {
      types: [RANKAMOUNT_LIST_REQUERY, RANKAMOUNT_LIST_SUCCESS, RANKAMOUNT_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/jcNewsCount',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchSubscrtberList() {
  return {
    [FETCH_API]: {
      types: [SUBSCRIBER_LIST_REQUERY, SUBSCRIBER_LIST_SUCCESS, SUBSCRIBER_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/jcSubscribeCount',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchNewsreleaseList() {
  return {
    [FETCH_API]: {
      types: [NEWSRELEASE_LIST_REQUERY, NEWSRELEASE_LIST_SUCCESS, NEWSRELEASE_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/jcLatestNews',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchDownloadList() {
  return {
    [FETCH_API]: {
      types: [DOWNLOAD_LIST_REQUERY, DOWNLOAD_LIST_SUCCESS, DOWNLOAD_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/downloadAnalysis',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchVersionList() {
  return {
    [FETCH_API]: {
      types: [VERSION_LIST_REQUERY, VERSION_LIST_SUCCESS, VERSION_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/areaAnalysis',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchNetworkList() {
  return {
    [FETCH_API]: {
      types: [NETWORK_LIST_REQUERY, NETWORK_LIST_SUCCESS, NETWORK_LIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/operatorAnalysis',
      origin:true,
      method: 'GET',
    }
  }
}

export function fetchEquipmentList() {
  return {
    [FETCH_API]: {
      types: [EQUIPMENT_LIST_REQUERY, EQUIPMENT_LIST_SUCCESS, EQUIPMENTLIST_FAILURE],
      endpoint: '/enorth-screen/r/screen_api/v1.0/api/terminalAnalysis',
      origin:true,
      method: 'GET',
    }
  }
}
