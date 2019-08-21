import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as a2Action from 'actions/a2';
import * as fourAction from 'actions/four';

import { List1 } from 'components/list';
import Bmap from 'components/bMap';
import Title from 'components/title';
import Bg from 'components/arrow/bg';
import Bottom from './bottom.js';
import Container from './container.js';
import Video from './video';


// import { Center, Hoop, Cards, Rotate } from 'components/common'

const test1 = ["电视信号1","电视信号2","电视信号3"];

class A2 extends React.Component {
  constructor(props) {
    super(props)
  }


  loop() {
    let a = 0;
    this.interval = setInterval(() => {
      a++;
      this.props.a2Action.fetchReporter();
      if(a === 3) {
        this.props.a2Action.fetchManuscriptList();
        this.props.a2Action.fetchAttmap();
        this.props.fourAction.fetchHubCountData();
        this.props.fourAction.fetchSubHubCountData();
        this.props.fourAction.fetchCenterMediaData();
        this.props.fourAction.fetchNewsWebData();
        this.props.fourAction.fetchCooperratorData();
      }
    }, 60 * 1000);
  }

  componentWillMount() {
    this.props.a2Action.fetchManuscriptList();
    this.props.a2Action.fetchReporter();
    this.props.a2Action.fetchAttmap();
    this.props.fourAction.fetchHubCountData();
    this.props.fourAction.fetchSubHubCountData();
    this.props.fourAction.fetchCenterMediaData();
    this.props.fourAction.fetchNewsWebData();
    this.props.fourAction.fetchCooperratorData();
    this.loop()
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const manuscriptList = this.props.manuscriptList.completed ? this.props.manuscriptList.result : [];
    const reporter = this.props.reporter.completed ? this.props.reporter.result : [];
    const attmap = this.props.attmap.completed ? this.props.attmap.result : [];

    const topData = this.props.hubCount.completed ? this.props.hubCount.result.topData : [];
    const rotateElement = this.props.hubCount.completed ? this.props.hubCount.result.centerData : [];
    const subHub = this.props.subHub.completed ? this.props.subHub.result : [];
    const centerMedia = this.props.centerMedia.completed ? this.props.centerMedia.result : {};
    const newsWeb = this.props.newsWeb.completed ? this.props.newsWeb.result : [];
    const cooperator = this.props.cooperator.completed ? this.props.cooperator.result : [];

    return (
      <div className="jinyun-z-three" style={{boxSizing: 'border-box'}}>
        <div style={{float: 'right', width: 1610, height: '100%', position: 'relative', marginLeft: 60}}>
          <div className="right-up-cook" style={{position: 'relative'}}>
            <div style={{ position: 'absolute', width: '100%', height: '100%'}}>
              <Bg lineType="two"/>
            </div>
            <Container
              dataSource={subHub}
              topData={topData}
              rotateElement={rotateElement}
            />
            <div style={{ position: 'absolute', height: 172, width: '100%', bottom: 140 }}>
              <Bottom
                dataSource={centerMedia}
                dataSource1={newsWeb}
                dataSource2={cooperator}
              />
            </div>
          </div>
          <div>
            <List1
              style={{ bottom: 0, position: 'absolute', width: '100%'}}
              title={(<Title style={{width: 240, backgroundSize: '240px 82px',fontSize:44,fontWeight:'bold'}}>原创稿件</Title>)}
              dataSource={manuscriptList}
              scrolled
            />
          </div>
        </div>
        <div style={{overflow: 'hidden', height: '100%', position:'relative'}}>
          <Bmap.Cluster2 dataSource={reporter} attMap={attmap} />
          <div style={{ position: 'absolute', bottom: 0, width: 2960, height:700}}>
            <Video titleC={test1} />
          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      manuscriptList: state.a2.manuscriptList,
      reporter: state.a2.reporter,
      attmap: state.a2.attmap,
      hubCount: state.four.hubCount,
      subHub: state.four.subHub,
      centerMedia: state.four.centerMedia,
      newsWeb: state.four.newsWeb,
      cooperator: state.four.cooperator,
    };
  },
  (dispatch) => {
    return {
      a2Action: bindActionCreators(a2Action, dispatch),
      fourAction: bindActionCreators(fourAction, dispatch)
    };
  }
)(A2);
