import { combineReducers } from 'redux';
import { dateFmt } from 'tool/util';
import {
  SEVEN_LIST_REQUERY,
  SEVEN_LIST_SUCCESS,
  SEVEN_LIST_FAILURE
} from "actions/seven.js";
function fomart(data) {
  let dataSource = data;
  if ('recResp' in data) {
    let recResp = data.recResp;
    const city = 'city' in recResp ? recResp.city.map(item => ({exponent: item.Sitename, content: item.Title })) : [];
    const focus = 'focus' in recResp ? recResp.focus.map(item => ({title: item.Title, dt:dateFmt(item.Urltime,'yyyy/MM/dd hh:mm:ss')})).splice(recResp.focus.length-9,recResp.focus.length) : [];
    const maps = 'maps' in recResp ? recResp.maps.map(item => ({exponent: item.Sitename, content: item.Title })) : [];
    const view = 'view' in recResp ? {
      '官方媒体': 'view_guan' in recResp.view ? recResp.view.view_guan.map(item => ({ title: item.Sitename, content: item.Title })) : [],
      '民间媒体': 'view_min' in recResp.view ? recResp.view.view_min.map(item => ({ title: item.Sitename, content: item.Title })) : [],
      '网络媒体': 'view_wang' in recResp.view ? recResp.view.view_wang.map(item => ({ title: item.Sitename, content: item.Title })) : [],
      '纸质媒体': 'view_zhi' in recResp.view ? recResp.view.view_zhi.map(item => ({ title: item.Sitename, content: item.Title })) : []
    } : {};
    const word = 'word' in recResp ? {
      'word_ji': 'word_ji' in recResp.word ? recResp.word.word_ji.map(item => ({ name: item.Key, value: parseInt(item.Value)})) : [],
      'word_wai': 'word_wai' in recResp.word ? recResp.word.word_wai.map(item => ({ name: item.Key, value: parseInt(item.Value)})) : []
    } : {};
    const curve = 'curve' in recResp ? recResp.curve.map(item => ({ key: item.name, value: 'y' in item && item.y.length > 0 && item.y.splice(0, item.y.length - 1), x: 'x' in item && item.x.length > 0 && item.x.splice(0, item.x.length - 1) })).splice(0, 4) :[];
    recResp = {
      ...recResp,
      city,
      view,
      word,
      curve,
      focus,
      maps

    }
    return {...dataSource, recResp}
  }

}
const data = (state = {}, action) => {
  switch (action.type) {
    case SEVEN_LIST_REQUERY:
      return {
        ...state,
        completed: false,
      };
    case SEVEN_LIST_SUCCESS:
      return {
        ...state,
        completed: true,
        result: fomart(action.resp)
      };
    case SEVEN_LIST_FAILURE:
      return {
        ...state,
        completed: false,
      };
    default:
      return state;
  }
};
export default combineReducers({
  data
})
