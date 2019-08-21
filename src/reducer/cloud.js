'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, dateFmt } from 'tool/util';

import {
  INTAKE_LIST_REQUERY,
  INTAKE_LIST_SUCCESS,
  INTAKE_LIST_FAILURE,
  RANKAMOUNT_LIST_REQUERY,
  RANKAMOUNT_LIST_SUCCESS,
  RANKAMOUNT_LIST_FAILURE,
  SUBSCRIBER_LIST_REQUERY,
  SUBSCRIBER_LIST_SUCCESS,
  SUBSCRIBER_LIST_FAILURE,
  NEWSRELEASE_LIST_REQUERY,
  NEWSRELEASE_LIST_SUCCESS,
  NEWSRELEASE_LIST_FAILURE,
  DOWNLOAD_LIST_REQUERY,
  DOWNLOAD_LIST_SUCCESS,
  DOWNLOAD_LIST_FAILURE,
  VERSION_LIST_REQUERY,
  VERSION_LIST_SUCCESS,
  VERSION_LIST_FAILURE,
  NETWORK_LIST_REQUERY,
  NETWORK_LIST_SUCCESS,
  NETWORK_LIST_FAILURE,
  EQUIPMENT_LIST_REQUERY,
  EQUIPMENT_LIST_SUCCESS,
  EQUIPMENTLIST_FAILURE
} from "actions/cloud.js";

const intakeList = (state = {}, action) => {
  switch (action.type) {
    case INTAKE_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case INTAKE_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ? action.resp : action.state.cloud.intakeList.result
      };
    case INTAKE_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const rankAmount = (state = {}, action) => {
  switch (action.type) {
    case RANKAMOUNT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case RANKAMOUNT_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item,i) => ({ title:item.appName, value:item.count })).splice(0, 7) : action.state.cloud.rankAmount.result
      };
    case RANKAMOUNT_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const subScriber = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBER_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case SUBSCRIBER_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item,i) => ({ title:item.appName, value:item.count })).splice(0, 7) : action.state.cloud.subScriber.result
      };
    case SUBSCRIBER_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const newsRelease = (state = {}, action) => {
  switch (action.type) {
    case NEWSRELEASE_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case NEWSRELEASE_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({content: item.title.replace(/(^\s*)|(\s*$)/g,''), exponent: item.source })) : action.state.cloud.newsRelease.result
      };
    case NEWSRELEASE_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const downloadList = (state = {}, action) => {
  switch (action.type) {
    case DOWNLOAD_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case DOWNLOAD_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({ key:item.store, satisfaction: parseFloat(item.percent*1000)/10})).splice(0,6) : action.state.cloud.downloadList.result
      };
    case DOWNLOAD_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const versionList = (state = {}, action) => {
  switch (action.type) {
    case VERSION_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case VERSION_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => (item.percent)) : action.state.cloud.versionList.result
      };
    case VERSION_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const network = (state = {}, action) => {
  switch (action.type) {
    case NETWORK_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case NETWORK_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({ name:item.net, value:item.percent })) : action.state.cloud.network.result
      };
    case NETWORK_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const equipment = (state = {}, action) => {
  switch (action.type) {
    case EQUIPMENT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case EQUIPMENT_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({ name:item.device, value:item.percent })) : action.state.cloud.equipment.result
      };
    case EQUIPMENTLIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  intakeList,
  rankAmount,
  subScriber,
  newsRelease,
  downloadList,
  versionList,
  network,
  equipment
})
