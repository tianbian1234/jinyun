import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as spreadAction from 'actions/spread';
import * as fourAction from 'actions/four';

import { Center, Hoop, Cards, Border, Gaine } from 'components/common';
import Bottom from './bottom.js';
import Container from './container.js';
import Mapnewfur from 'components/map_new_four';
import Bg from 'components/arrow/bg';

const test3 = [{title:'京津冀交通一体化加快公交发展"一卡通"12城互联互通',time:"2017年2月7日",data:[
  [{name:'天津'}, {name:'天津',value:95}],
  [{name:'天津'}, {name:'广州',value:90}],
  [{name:'天津'}, {name:'大连',value:80}],
  [{name:'天津'}, {name:'南宁',value:70}],
  [{name:'天津'}, {name:'南昌',value:60}],
  [{name:'天津'}, {name:'拉萨',value:50}],
  [{name:'天津'}, {name:'长春',value:40}],
  [{name:'天津'}, {name:'包头',value:30}],
  [{name:'天津'}, {name:'重庆',value:20}],
  [{name:'天津'}, {name:'常州',value:10}]
]},{title:'天津大屏事件分析综合改善，数据完美对接',time:"2017年2月7日",data:[
  [{name:'天津'}, {name:'天津',value:95}],
  [{name:'天津'}, {name:'乌鲁木齐',value:90}],
  [{name:'天津'}, {name:'昆明',value:80}],
  [{name:'天津'}, {name:'哈尔滨',value:70}]
]}];

class Four extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fourAction.fetchHubCountData();
    this.props.fourAction.fetchSubHubCountData();
    this.props.fourAction.fetchCenterMediaData();
    this.props.fourAction.fetchNewsWebData();
    this.props.fourAction.fetchCooperratorData();
    this.props.spreadAction.fetchSignalPathSpread();
    this.staticIntervalFetch();
  }
  staticIntervalFetch() {
    this.fourInterval = setInterval(() => {
      this.props.fourAction.fetchHubCountData();
      this.props.fourAction.fetchSubHubCountData();
      this.props.fourAction.fetchCenterMediaData();
      this.props.fourAction.fetchNewsWebData();
      this.props.fourAction.fetchCooperratorData();
      this.props.spreadAction.fetchSignalPathSpread();
    }, 5000);
  }
  componentWillUnmount() {
    if (this.fourInterval) {
      clearInterval(this.fourInterval);
    }
  }
  render() {

    const topData = this.props.hubCount.completed ? this.props.hubCount.result.topData : [];
    const rotateElement = this.props.hubCount.completed ? this.props.hubCount.result.centerData : [];
    const subHub = this.props.subHub.completed ? this.props.subHub.result : [];
    const centerMedia = this.props.centerMedia.completed ? this.props.centerMedia.result : {};
    const newsWeb = this.props.newsWeb.completed ? this.props.newsWeb.result : [];
    const cooperator = this.props.cooperator.completed ? this.props.cooperator.result : [];
    const signalPathList = this.props.signalPathList.completed ? this.props.signalPathList.result : [];
    return(
      <div className="jinyun-four container-bg">
        <div className="four-line">
          <Bg/>
        </div>
        <Container
          dataSource={subHub}
          topData={topData}
          rotateElement={rotateElement}
        />
        <div className="four-map">
          <Mapnewfur
            title={("")}
            style={{width:1000,height:762,position:"absolute"}}
            mapWidth={1000}
            mapHeight={762}
            mapLeft={60}
            backShow={false}
            mapTop={600}
            mapZoom={1.07}
            dataSource={signalPathList}
          />
        </div>
        <div className="four-bottom">
          <Bottom
            dataSource={centerMedia}
            dataSource1={newsWeb}
            dataSource2={cooperator}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      hubCount: state.four.hubCount,
      subHub: state.four.subHub,
      centerMedia: state.four.centerMedia,
      newsWeb: state.four.newsWeb,
      cooperator: state.four.cooperator,
      signalPathList: state.spread.signal_path,
    };
  },
  (dispatch) => {
    return {
      spreadAction: bindActionCreators(spreadAction, dispatch),
      fourAction: bindActionCreators(fourAction, dispatch)
    };
  }
)(Four);
