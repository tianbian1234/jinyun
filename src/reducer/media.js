'use strict';
import { combineReducers } from 'redux';
import { getDateDiff, dateFmt } from 'tool/util';
import {
  DEPTNEWSCOUNT_LIST_REQUERY,
  DEPTNEWSCOUNT_LIST_SUCCESS,
  DEPTNEWSCOUNT_LIST_FAILURE,
} from "actions/media.js";

const deptNewsCount = (state = {}, action) => {
  switch (action.type) {
    case DEPTNEWSCOUNT_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case DEPTNEWSCOUNT_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.sort((a, b) => a.date > b.date).slice(0, 7) : action.state.media.deptNewsCount.result
      };
    case DEPTNEWSCOUNT_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  deptNewsCount,
})
