'use strict';
import { combineReducers } from 'redux';
import { getDateDiff } from 'tool/util';
import {
  TOPIC_LIST_REQUERY,
  TOPIC_LIST_SUCCESS,
  TOPIC_LIST_FAILURE,
  HISTORY_LIST_REQUERY,
  HISTORY_LIST_SUCCESS,
  HISTORY_LIST_FAILURE,
} from "actions/enorth_screen.js";

const selectTopic = (state = {}, action) => {
  switch (action.type) {
    case TOPIC_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case TOPIC_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ? action.resp : action.state.topic.selectTopic.result
      };
    case TOPIC_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
const eventClue = (state = {}, action) => {
  switch (action.type) {
    case HISTORY_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case HISTORY_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: Object.keys(action.resp).length > 0 ?  action.resp.events.map(item => ({
          dt: `${item.year}年${action.resp.month}月${action.resp.day}日`,
          title: item.content
        })) : action.state.topic.eventClue.result
      };
    case HISTORY_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
export default combineReducers({
  selectTopic,
  eventClue
})
