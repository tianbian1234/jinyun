'use strict';
import {combineReducers} from 'redux';
import {getDateDiff} from 'tool/util';

import {
  PERSONAS_LIST_REQUERY,
  PERSONAS_LIST_SUCCESS,
  PERSONAS_LIST_FAILURE,
  SHOOTING_LIST_REQUERY,
  SHOOTING_LIST_SUCCESS,
  SHOOTING_LIST_FAILURE,
  USERCARE_LIST_REQUERY,
  USERCARE_LIST_SUCCESS,
  USERCARE_LIST_FAILURE
} from "actions/personas.js";

const personas = (state = {}, action) => {
  switch (action.type) {
    case PERSONAS_LIST_REQUERY:
      return {
        ...state,
        completed: false
      };
    case PERSONAS_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp.map(d => ({
          ...d,
          footprint: d.footprint.map(f => ({lon: parseFloat(f.longitude), lat: parseFloat(f.latitude), count: f.count || 0}))
        })) : action.state.personas.personas.result
      };
    case PERSONAS_LIST_FAILURE:
      return {
        ...state,
        completed: false
      };
    default:
      return state;
  }
};

const shooting = (state = {}, action) => {
  switch (action.type) {
    case SHOOTING_LIST_REQUERY:
      return {
        ...state,
        completed: false
      };
    case SHOOTING_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.personas.shooting.result
      };
    case SHOOTING_LIST_FAILURE:
      return {
        ...state,
        completed: false
      };
    default:
      return state;
  }
};

const usercare = (state = {}, action) => {
  switch (action.type) {
    case USERCARE_LIST_REQUERY:
      return {
        ...state,
        completed: false
      };
    case USERCARE_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: action.resp.length > 0 ? action.resp : action.state.personas.usercare.result
      };
    case USERCARE_LIST_FAILURE:
      return {
        ...state,
        completed: false
      }
    default:
      return state;
  }
}

export default combineReducers({
  personas, shooting,usercare
})
