import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sevenAction from 'actions/seven';
import Line from 'components/line';
import Title from 'components/title';
import Box from './box';
import Word2 from 'components/word_2d';
import Event from 'components/event';
import { List3 } from 'components/list';
import Heartbeat from 'components/heartbeat';
import Vs from 'components/event_vs';

class Seven extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.sevenAction.fetchList();
    this.staticIntervalFetch();
  }
  staticIntervalFetch() {
    this.sevenInterval = setInterval(() => {
      this.props.sevenAction.fetchList();
    }, 180000);
  }
  componentWillUnmount() {
    if (this.sevenInterval) {
      clearInterval(this.sevenInterval);
    }
  }
  render() {
    const cityData = this.props.dataList.completed ? this.props.dataList.result.recResp.city : [];
    const countryData = this.props.dataList.completed ? this.props.dataList.result.recResp.maps : [];
    const spotData = this.props.dataList.completed ? this.props.dataList.result.recResp.focus : [];
    const dataList = this.props.dataList.completed ? this.props.dataList.result : [];
    const lineList = this.props.dataList.completed ? this.props.dataList.result.recResp.curve : [];
    const viewList = this.props.dataList.completed ? this.props.dataList.result.recResp.view : {};
    const word_wai = this.props.dataList.completed ? this.props.dataList.result.recResp.word.word_wai : [];
    const word_ji = this.props.dataList.completed ? this.props.dataList.result.recResp.word.word_ji : [];

    console.log(word_wai);

    return (
      <div className="jinyun-seven container-bg">
        <div className="left">
          <div className="left-top-7">
            <Line
              title={(<Title style={{width: 569, backgroundSize: '505px 82px',fontSize:44,fontWeight:'bold'}}>事件声量曲线</Title>)}
              widthL={1650}
              heightL={800}
              dataSource={lineList}
            />
          </div>
          <div className="left-center">
            <Vs
              title={(<Title style={{width: 569, backgroundSize: '505px 82px',fontSize:44,fontWeight:'bold'}}>事件观点对比</Title>)}
              dataSource={viewList}
            />
          </div>
          <div className="left-bottom">
            <Box style={{width:1521,height:943}} title={(<Title style={{width: 569, backgroundSize: '505px 82px',fontSize:44,fontWeight:'bold'}}>事件热词对比</Title>)}>
              <div style={{width:'100%',height:200}}>
                <p className="name name1">津云媒体</p>
                <div className="center"></div>
                <p className="name name2">外埠媒体</p>
              </div>
              <div className="word-box1">
                <Word2
                  width={600}
                  height={600}
                  widthD={600}
                  heightD={600}
                  left={0}
                  big={70}
                  dataSource={word_ji}
                />
              </div>
              <div className="word-box2">
                <Word2
                  width={600}
                  height={600}
                  widthD={600}
                  heightD={600}
                  left={0}
                  big={70}
                  dataSource={word_wai}
                />
              </div>
            </Box>
          </div>
        </div>
        <div className="right">
          <div className="right-top-7">
            <div className="content-top">
              <Event
                dataSource={dataList && dataList.preResp}
              />
            </div>
            <div className="list-top">
              <List3
                style={{ marginBottom: 80}}
                title={(<Title>相关报道</Title>)}
                leftLabel="本市媒体"
                centerLabel=" "
                rightLabel=" "
                dataSource={cityData}
                scrolled
              />
              <List3
                style={{ marginBottom: 80}}
                title={''}
                leftLabel="全国媒体"
                centerLabel=" "
                rightLabel=" "
                dataSource={countryData}
              />
            </div>
          </div>
          <div className="right-bottom" style={{marginLeft: 0}}>
            <Title>事件焦点脉络(近三日)</Title>
            <div style={{width: '100%', height: 810, marginTop: 60}}>
              <Heartbeat dataSource={spotData}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      dataList:state.seven.data
    };
  },
  (dispatch) => {
    return {
      sevenAction: bindActionCreators(sevenAction, dispatch)
    };
  }
)(Seven);
