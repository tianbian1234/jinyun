'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, dateFmt } from 'tool/util';
import {
  HOTWORDS_LIST_REQUERY,
  HOTWORDS_LIST_SUCCESS,
  HOTWORDS_LIST_FAILURE,
  SCATTERS_LIST_REQUERY,
  SCATTERS_LIST_SUCCESS,
  SCATTERS_LIST_FAILURE,
  TOPNEW_LIST_REQUERY,
  TOPNEW_LIST_SUCCESS,
  TOPNEW_LIST_FAILURE,
  QU_LIST_REQUERY,
  QU_LIST_SUCCESS,
  QU_LIST_FAILURE,
  QUMAN_LIST_REQUERY,
  QUMAN_LIST_SUCCESS,
  QUMAN_LIST_FAILURE,
  BUMEN_LIST_REQUERY,
  BUMEN_LIST_SUCCESS,
  BUMEN_LIST_FAILURE,
  BUMENMAN_LIST_REQUERY,
  BUMENMAN_LIST_SUCCESS,
  BUMENMAN_LIST_FAILURE,
  DP_LIST_REQUERY,
  DP_LIST_SUCCESS,
  DP_LIST_FAILURE,
  TAG_LIST_REQUERY,
  TAG_LIST_SUCCESS,
  TAG_LIST_FAILURE,
  A_DIAN_REQUERY,
  A_DIAN_SUCCESS,
  A_DIAN_FAILURE,
} from "actions/five.js";

const hotwords = (state = {}, action) => {
  switch (action.type) {
    case HOTWORDS_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case HOTWORDS_LIST_SUCCESS:
      let hotwords = [];
      action.resp.map(d => {
        d.value.map(t => {
          hotwords.push({
            key: t.itemName,
            value: t.itemValue
          })
        })
      });
      return {
        ...state,
        completed: true,
        result: hotwords.length > 0 ? hotwords : action.state.five.hotwords.result
      };
    case HOTWORDS_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const scatters = (state = {}, action) => {
  switch (action.type) {
    case SCATTERS_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case SCATTERS_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.five.scatters.result
      };
    case SCATTERS_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const topnew = (state = {}, action) => {
  switch (action.type) {
    case TOPNEW_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case TOPNEW_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ?action.resp.map(d => ({
          content: d.title,
          label: dateFmt(d.checkDate, 'M-d'),
          url:d.daPingUrl
        })) : action.state.five.topnew.result
      };
    case TOPNEW_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const qu = (state = {}, action) => {
  switch (action.type) {
    case QU_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case QU_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(d => ({
          key: d.name,
          message: d.value.all,
          reply: d.value.answered,
          rate: (d.value.answered / d.value.all * 100).toFixed(0) + '%',
          satisfaction: ((d.value.all - d.value.badResponse) / d.value.all * 100).toFixed(0)
        })).slice(0, 6).sort(function(a, b){return b.satisfaction -a.satisfaction;}) : action.state.five.qu.result
      };
    case QU_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const quman = (state = {}, action) => {
  switch (action.type) {
    case QUMAN_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case QUMAN_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(d => ({
          key: d.name,
          rate: (d.value.answered / d.value.all * 100).toFixed(0) + '%',
          satisfaction: ((d.value.all - d.value.badResponse) / d.value.all * 100).toFixed(0)
        })).slice(0, 6).sort(function(a, b){return b.satisfaction -a.satisfaction;}) : action.state.five.quman.result
      };
    case QUMAN_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const bumen = (state = {}, action) => {
    switch (action.type) {
      case BUMEN_LIST_REQUERY:
        return {
          ...state,
          completed: false,
        };
      case BUMEN_LIST_SUCCESS:
        return {
          ...state,
          completed: true,
          result: action.resp.length > 0 ? action.resp.map(d => ({
            key: d.name,
            message: d.value.all,
            reply: d.value.answered,
            rate: (d.value.answered / d.value.all * 100).toFixed(0) + '%',
            satisfaction: ((d.value.all - d.value.badResponse) / d.value.all * 100).toFixed(0)
          })).slice(0, 6).sort(function(a, b){return b.satisfaction -a.satisfaction;}) : action.state.five.bumen.result
        };
      case BUMEN_LIST_FAILURE:
        return {
          ...state,
          completed: false,
        };
      default:
        return state;
    }
};

const bumenman = (state = {}, action) => {
  switch (action.type) {
    case BUMENMAN_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case BUMENMAN_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(d => ({
          key: d.name,
          rate: (d.value.answered / d.value.all * 100).toFixed(0) + '%',
          satisfaction: ((d.value.all - d.value.badResponse) / d.value.all * 100).toFixed(0)
        })).slice(0, 6).sort(function(a, b){return b.satisfaction -a.satisfaction;}) : action.state.five.bumenman.result
      };
    case BUMENMAN_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const dp = (state = {}, action) => {
  switch (action.type) {
    case DP_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case DP_LIST_SUCCESS:
      let mapT = [];
      action.resp.map(d => {
        let keys = Object.keys(d.values);
        let subT = keys.map(item => ({
          name:d.key,
          key:item,
          question:d.values[item].map(item2 => ({
            address:item2.deptName + item2.address,
            num: d.values[item].length,
            url:item2.daPingUrl,
            date:item2.regDate,
            title:d.key,
            content:item2.title
          }))
        }));
        mapT.push(subT);
      });
      return {
        ...state,
        completed: true,
        result: mapT.length > 0 ? mapT : action.state.five.dp.result
      };
    case DP_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const tag = (state = {}, action) => {
  switch (action.type) {
    case TAG_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case TAG_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(d => {
          if (d.value && d.value.length > 0) {
            return d.value.slice(0, 10);
          }
          return [];
        }) : action.state.five.tag.result
      };
    case TAG_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const dianA = (state = {}, action) => {
  switch (action.type) {
    case A_DIAN_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case A_DIAN_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.five.dianA.result
      };
    case A_DIAN_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  hotwords, scatters, topnew, qu, quman, bumen, bumenman, dp, tag, dianA
})
