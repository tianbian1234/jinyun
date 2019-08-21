import { combineReducers } from 'redux';

import one from 'reducer/news';
import spread from 'reducer/spread';
import a2 from 'reducer/a2';
import five from 'reducer/five';
import seven from 'reducer/seven';
import topic from 'reducer/topic';

import personas from 'reducer/personas';
import cloud from 'reducer/cloud';
import ten from 'reducer/ten'
import media from 'reducer/media';
import four from 'reducer/four';
/*

**/
export default combineReducers({
  one,
  spread,
  a2,
  seven,
  five,
  topic,
  personas,
  cloud,
  ten,
  media,
  four
})
