import React from 'react';
import Bmap from '../../components/bMap';

import * as a2Action from 'actions/a2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Video from './video';

const test1 = ["直播源1","直播源2","直播源3","直播源4"];

class Zthree extends React.Component {
  constructor(props) {
    super(props)
  }

  loop() {
    let a = 0;
    this.interval = setInterval(() => {
      a++;
      this.props.a2Action.fetchReporter();
      if(a== 3)
      {
        a=0;
        this.props.a2Action.fetchAttmap();
      }
    }, 60 * 1000);
  }

  componentWillMount() {
    this.props.a2Action.fetchReporter();
    this.props.a2Action.fetchAttmap();
    this.loop();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const reporter = this.props.reporter.completed ? this.props.reporter.result : [];
    const attmap = this.props.attmap.completed ? this.props.attmap.result : [];

    console.log(reporter);

    return (
      <div className="jinyun-z-three" style={{boxSizing: 'border-box'}}>
        <div style={{float: 'right', width: 1610, height: '100%', position: 'relative', marginLeft: 60}}>
          <Video titleC={test1} />
        </div>
        <div style={{overflow: 'hidden', height: '100%'}}>
          <Bmap.Cluster dataSource={reporter} attMap={attmap} />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      reporter: state.a2.reporter,
      attmap: state.a2.attmap,
    };
  },
  (dispatch) => {
    return {
      a2Action: bindActionCreators(a2Action, dispatch)
    };
  }
)(Zthree);
