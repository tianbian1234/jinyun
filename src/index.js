import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './store.js';
const store = configureStore();

/* 导入样式 **/
import  'styles/index.scss';

/* -- containers 引入 ---*/
import App from 'containers/home';
import Layout from 'containers/layout';
import Test from 'containers/test';
import One from 'containers/one';
import Two from 'containers/two';
import Three from 'containers/z_three';
import Four from 'containers/four';
import Five from 'containers/five';
import Six from 'containers/six';
import Nine from 'containers/nine';
import Zone from 'containers/z_one';
import Ztwo from 'containers/z_two';
import A3 from 'containers/a3';
import A2 from 'containers/a2';   //三联屏 A2
import A1 from 'containers/a1';
import A2_test from 'containers/a2/test.js';
import Seven from 'containers/seven';
import Ten from 'containers/ten'

/* -- end ---*/
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}/>
      <Route path="test" component={Test}/>
      <Route path="one" component={One}/>
      <Route path="two" component={Two}/>
      <Route path="three" component={Three}/>
        <Route path="four" component={Four}/>
      <Route path="five" component={Five}/>
      <Route path="six" component={Six}/>
      <Route path="nine" component={Nine}/>
      <Route path="seven" component={Seven}/>
      <Route path="z_one" component={Zone}/>
      <Route path="z_two" component={Ztwo}/>
      <Route path="z_three" component={Three}/>
      <Route path="a3" component={A3}/>
      <Route path="a2" component={A2}/>
      <Route path="a1" component={A1}/>
      <Route path="a2/test" component={A2_test}/>
      <Route path='ten' component={Ten}> </Route>
    </Route>
 </Router>
)

/*-- router end--*/
// Render the main component into the dom
ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('app'));
