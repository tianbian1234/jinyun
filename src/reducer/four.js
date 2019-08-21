'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, dateFmt } from 'tool/util';
import {
  HUBCOUNT_LIST_REQUERY,
  HUBCOUNT_LIST_SUCCESS,
  HUBCOUNT_LIST_FAILURE,
  SUBHUB_LIST_REQUERY,
  SUBHUB_LIST_SUCCESS,
  SUBHUB_LIST_FAILURE,
  CENTERMEDIA_LIST_REQUERY,
  CENTERMEDIA_LIST_SUCCESS,
  CENTERMEDIA_LIST_FAILURE,
  NEWSWEB_LIST_REQUERY,
  NEWSWEB_LIST_SUCCESS,
  NEWSWEB_LIST_FAILURE,
  COOPERATOR_LIST_REQUERY,
  COOPERATOR_LIST_SUCCESS,
  COOPERATOR_LIST_FAILURE
} from "actions/four.js";

const cooperator = (state = {}, action) => {
  switch (action.type) {
    case COOPERATOR_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case COOPERATOR_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ? action.resp : action.state.four.cooperator.result
      };
    case COOPERATOR_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const newsWeb = (state = {}, action) => {
  switch (action.type) {
    case NEWSWEB_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case NEWSWEB_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ? action.resp : action.state.four.newsWeb.result
      };
    case NEWSWEB_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const centerMedia = (state = {}, action) => {
  switch (action.type) {
    case CENTERMEDIA_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case CENTERMEDIA_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ? action.resp : action.state.four.centerMedia.result
      };
    case CENTERMEDIA_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const subHub = (state = {}, action) => {
  switch (action.type) {
    case SUBHUB_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case SUBHUB_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => ({name: item.deptName, provide: item.addCount, fetch: item.getCount})) : action.state.four.subHub.result
      };
    case SUBHUB_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const hubCount = (state = {}, action) => {
  switch (action.type) {
    case HUBCOUNT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case HUBCOUNT_LIST_SUCCESS:
      let hubCotent = {};
      hubCotent.topData=[
        {name: "津云号", value: action.resp.jcCount},
        {name: "天河一号", value: action.resp.tianheHours+"小时"},
        {name: "云抓取", value: action.resp.spiderCount},
      ];
      hubCotent.centerData=[
        {name: "月选题", value: action.resp.subjectCount},
        {name: "月供稿", value: action.resp.addCount},
        {name: "月取稿", value: action.resp.getCount},
      ];
      return {
        ...state,
        completed: true,
        result:  Object.keys(hubCotent).length > 0 ? hubCotent : action.state.four.hubCount.result
      };
    case HUBCOUNT_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  hubCount,
  subHub,
  centerMedia,
  newsWeb,
  cooperator
})
