'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, dateFmt } from 'tool/util';
import {
  MAUNSCRIPT_LIST_REQUERY,
  MAUNSCRIPT_LIST_SUCCESS,
  MAUNSCRIPT_LIST_FAILURE,
  REPORTER_LIST_REQUERY,
  REPORTER_LIST_SUCCESS,
  REPORTER_LIST_FAILURE,
  ATTMAP_LIST_REQUERY,
  ATTMAP_LIST_SUCCESS,
  ATTMAP_LIST_FAILURE,
} from "actions/a2.js";

const manuscriptList = (state = {}, action) => {
  switch (action.type) {
    case MAUNSCRIPT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case MAUNSCRIPT_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(item => ({
          key: item.newsId,
          label: dateFmt(item.pubDate, 'M-d'),
          content: item.title
        })) : action.state.a2.manuscriptList.result
      };
    case MAUNSCRIPT_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const reporter = (state = {}, action) => {
  switch (action.type) {
    case REPORTER_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case REPORTER_LIST_SUCCESS:
      // console.log(action);
      let result = [];
      let typeMap = {
        plane: 'ufo',
        truck: 'car',
        package: '4g',
        camera: 'photo',
      };
      ['plane', 'truck', 'package', 'camera', 'person'].map(type => {
        action.resp.map(d => {
          if (type == 'person') {
            result.push({
              type: 'person',
              lon: parseFloat(d.longitude),
              lat: parseFloat(d.latitude),
              info: d
            })
          } else if (d.devices[type] == 1) {
            result.push({
              type: typeMap[type],
              lon: parseFloat(d.longitude),
              lat: parseFloat(d.latitude),
              info: d
            })
          }
        })
      });
      return {
        ...state,
        completed: true,
        result: result.length > 0 ? result : action.state.a2.reporter.result
      };
    case REPORTER_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

const attmap = (state = {}, action) => {
  switch (action.type) {
    case ATTMAP_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case ATTMAP_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.a2.attmap.result
      };

    case ATTMAP_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  manuscriptList, reporter, attmap
})
