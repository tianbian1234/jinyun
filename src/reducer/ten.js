'use strict';
import { combineReducers } from 'redux';
import {
  WEBFACE_LIST_REQUERY,
  WEBFACE_LIST_SUCCESS,
  WEBFACE_LIST_FAILURE,
  HISTORYTODAY_LIST_REQUERY,
  HISTORYTODAY_LIST_SUCCESS,
  HISTORYTODAY_LIST_FAILURE,
  LATESTNEWS_LIST_REQUERY,
  LATESTNEWS_LIST_SUCCESS,
  LATESTNEWS_LIST_FAILURE,
} from "actions/ten.js";

// 截图
const webfacelist = (state = {}, action) => {
  switch (action.type) {
    case WEBFACE_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case WEBFACE_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.ten.webfacelist.result
      };
    case WEBFACE_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

// 历史上的今天
const historytodaylist = (state = {}, action) => {
  switch (action.type) {
    case HISTORYTODAY_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case HISTORYTODAY_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ? action.resp : action.state.ten.historytodaylist.result
      };
    case HISTORYTODAY_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};


// 最新稿件
const latestnewslist = (state = {}, action) => {
  switch (action.type) {
    case LATESTNEWS_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case LATESTNEWS_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.ten.latestnewslist.result
      };
    case LATESTNEWS_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  webfacelist,historytodaylist,latestnewslist
})
