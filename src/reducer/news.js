'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, formatDate, dateFmt } from 'tool/util';
import {
  TOUTIAO_LIST_REQUERY,
  TOUTIAO_LIST_SUCCESS,
  TOUTIAO_LIST_FAILURE,
  WECHAT_LIST_REQUERY,
  WECHAT_LIST_SUCCESS,
  WECHAT_LIST_FAILURE,
  WEIBO_LIST_REQUERY,
  WEIBO_LIST_SUCCESS,
  WEIBO_LIST_FAILURE,
  MEITI_LIST_REQUERY,
  MEITI_LIST_SUCCESS,
  MEITI_LIST_FAILURE,
  WORD_LIST_REQUERY,
  WORD_LIST_SUCCESS,
  WORD_LIST_FAILURE,
  ALL_WORD_LIST_REQUERY,
  ALL_WORD_LIST_SUCCESS,
  ALL_WORD_LIST_FAILURE,
  SPOT_LIST_REQUERY,
  SPOT_LIST_SUCCESS,
  SPOT_LIST_FAILURE,
  FEEL_LIST_REQUERY,
  FEEL_LIST_SUCCESS,
  FEEL_LIST_FAILURE,
  AREA_LIST_REQUERY,
  AREA_LIST_SUCCESS,
  AREA_LIST_FAILURE
} from "actions/news.js";

const toutiao = (state = {}, action) => {
  switch (action.type) {
    case TOUTIAO_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case TOUTIAO_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => ({key: item.dt, label: item.orign, content: item.title})) : action.state.news.toutiao.result
      };
    case TOUTIAO_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const wechat = (state = {}, action) => {
  switch (action.type) {
    case WECHAT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case WECHAT_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => ({key: item.dt, label: item.nick, content: item.title})) : action.state.news.wechat.result
      };
    case WECHAT_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const weibo = (state = {}, action) => {
  switch (action.type) {
    case WEIBO_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case WEIBO_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => {
          return {
            origin: item.nick,
            suffix: getDateDiff(item.dt),
            icon:item.icon,
            content: item.title.replace(/(^\s*)|(\s*$)/g,'')
          };
        }): action.state.news.weibo.result
      };
    case WEIBO_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const meiti = (state = {}, action) => {
  switch (action.type) {
    case MEITI_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case MEITI_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({area:item.area,title:item.title,date:item.dt,href:item.url,type:item.bb,val:30})) : action.state.news.meiti.result
      };
    case MEITI_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const word = (state = {}, action) => {
  switch (action.type) {
    case WORD_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case WORD_LIST_SUCCESS:
      let wordUse = action.resp.splice(0, 15);
      let wordAll = wordUse.map(item => (item.v));
      let maxV = Math.max.apply({},wordAll);
      let minV = Math.min.apply({},wordAll);
      return {
        ...state,
        completed: true,
        result: wordUse.length > 0 ? wordUse.map((item) => ({ key: item.k, value: ((400-30)*(item.v-minV))/(maxV-minV)+30 })).sort(function(a,b){return b.value - a.value}) : action.state.news.word.result
      };
    case WORD_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const allWord = (state = {}, action) => {
  switch (action.type) {
    case ALL_WORD_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case ALL_WORD_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map((item) => ({ key: item.k, value: item.v })).splice(0, 60) : action.state.news.allWord.result
      };
    case ALL_WORD_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const spot = (state = {}, action) => {
  switch (action.type) {
    case SPOT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case SPOT_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => ({title:item.title, dt:dateFmt(item.dt,'yyyy/MM/dd hh:mm:ss')})) : action.state.news.spot.result
      };
    case SPOT_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const feel = (state = {}, action) => {
  switch (action.type) {
    case FEEL_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case FEEL_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.news.feel.result
      };
    case FEEL_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const area = (state = {}, action) => {
  switch (action.type) {
    case AREA_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case AREA_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.news.area.result
      };
    case AREA_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
export default combineReducers({
  toutiao,
  wechat,
  weibo,
  meiti,
  word,
  allWord,
  spot,
  feel,
  area
})
