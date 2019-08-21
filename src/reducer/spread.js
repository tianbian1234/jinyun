'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, dateFmt } from 'tool/util';
import {
  LISTEN_RATIO_REQUERY,
  LISTEN_RATIO_SUCCESS,
  LISTEN_RATIO_FAILURE,
  LISTEN_COUNT_REQUERY,
  LISTEN_COUNT_SUCCESS,
  LISTEN_COUNT_FAILURE,
  PUBLICITY_CONTENT_REQUERY,
  PUBLICITY_CONTENT_SUCCESS,
  PUBLICITY_CONTENT_FAILURE,
  STORY_SPREAD_REQUERY,
  STORY_SPREAD_SUCCESS,
  STORY_SPREAD_FAILURE,
  AUTHOR_SPREAD_REQUERY,
  AUTHOR_SPREAD_SUCCESS,
  AUTHOR_SPREAD_FAILURE,
  WECHAT_SPREAD_REQUERY,
  WECHAT_SPREAD_SUCCESS,
  WECHAT_SPREAD_FAILURE,
  SIGNALPATH_SPREAD_REQUERY,
  SIGNALPATH_SPREAD_SUCCESS,
  SIGNALPATH_SPREAD_FAILURE
} from "actions/spread.js";

const listen_ratio = (state = {}, action) => {
  switch (action.type) {
    case LISTEN_RATIO_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case LISTEN_RATIO_SUCCESS:
      console.log(action);
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({ name: item.channelName, value: item.percent })) : action.state.spread.completed ? action.state.spread.listen_ratio.result : ''
      };
    case LISTEN_RATIO_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const listen_count = (state = {}, action) => {
  switch (action.type) {
    case LISTEN_COUNT_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case LISTEN_COUNT_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({ title: item.chennalName, value: item.percent})) : action.state.spread.listen_count.result
      };
    case LISTEN_COUNT_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const publicity_content = (state = {}, action) => {
  switch (action.type) {
    case PUBLICITY_CONTENT_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case PUBLICITY_CONTENT_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => ({ name:item.tag, value: item.weight })) : action.state.spread.publicity_content.result
      };
    case PUBLICITY_CONTENT_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const story_spread = (state = {}, action) => {
  switch (action.type) {
    case STORY_SPREAD_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case STORY_SPREAD_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item, idx)=> ({
          ranking: idx + 1,
          content: item.name,
          org:item.org,
          exponent: item.pubNum.toFixed(2)
        })) : action.state.spread.story_spread.result
      };
    case STORY_SPREAD_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const author_spread = (state = {}, action) => {
  switch (action.type) {
    case AUTHOR_SPREAD_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case AUTHOR_SPREAD_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item, idx)=> ({
          ranking: idx + 1,
          content: item.name,
          org: item.org,
          exponent: item.pubNum.toFixed(2)
        })) : action.state.spread.author_spread.result
      };
    case AUTHOR_SPREAD_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const wechat_spread = (state = {}, action) => {
  switch (action.type) {
    case WECHAT_SPREAD_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case WECHAT_SPREAD_SUCCESS:
      let wechat = [];
      action.resp.map((item, idx) => {

        wechat.push(item.map((item1, i) => ({
          ranking: i + 1,
          content: item1.name,
          org: item1.org
          })));
      });
      return {
        ...state,
        completed: true,
        result: wechat.length > 0 ? wechat : action.state.spread.wechat_spread.result
      };
    case WECHAT_SPREAD_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const signal_path = (state = {}, action) => {
  switch (action.type) {
    case SIGNALPATH_SPREAD_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case SIGNALPATH_SPREAD_SUCCESS:
      let pathA = [];
      action.resp.map(item => {
        'data' in item && item.data.length > 0 && item.data.unshift([{name: '天津'}, {name: '天津', value: 25}]);
        pathA.push({time: item.time, org: item.org, title: item.title, data: item.data});
      });
      return {
        ...state,
        completed: true,
        result: pathA.length > 0 ? pathA : action.state.spread.signal_path.result
      };
    case SIGNALPATH_SPREAD_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state
  }
};

export default combineReducers({
  listen_ratio,
  listen_count,
  publicity_content,
  story_spread,
  author_spread,
  wechat_spread,
  signal_path
})
