import React from 'react';

import Map from 'components/map';
import Pop from 'components/pop_feelings';
import Hotword from 'components/hot_words';
import Heartbeat from 'components/heartbeat';
import Bubble from 'components/bubble';
import Arealist from 'components/newList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsAction from 'actions/news';

import { List1, List2 } from 'components/list';
import Title from 'components/title';

class One extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.newsAction.fetchToutiaoList();
    this.props.newsAction.fetchWeichatList();
    this.props.newsAction.fetchWordList();
    this.props.newsAction.fetchAllWordList();
    this.props.newsAction.fetchMeitiList();
    this.props.newsAction.fetchWeiboList();
    this.props.newsAction.fetchSpotList();
    this.props.newsAction.fetchAreaList();
    // this.props.newsAction.fetchFeelList();
    this.staticIntervalFetch()
  }
  staticIntervalFetch() {
    this.oneInterval = setInterval(() => {
      this.props.newsAction.fetchToutiaoList();
      this.props.newsAction.fetchWeichatList();
      this.props.newsAction.fetchWordList();
      this.props.newsAction.fetchAllWordList();
      this.props.newsAction.fetchMeitiList();
      this.props.newsAction.fetchWeiboList();
      this.props.newsAction.fetchSpotList();
      this.props.newsAction.fetchAreaList();
      // this.props.newsAction.fetchFeelList();
    }, 180000);
  }
  componentWillUnmount() {
    if (this.oneInterval) {
      clearInterval(this.oneInterval);
    }
  }
  render() {
    const data = this.props.wordList.completed ? this.props.wordList.result : [];
    const wordListAll = this.props.wordListAll.completed ? this.props.wordListAll.result : [];
    const toutiaoData = this.props.toutiaoData.completed ? this.props.toutiaoData.result : [];
    const wechatData = this.props.wechatData.completed ? this.props.wechatData.result : [];
    const weiboData = this.props.weiboData.completed ? this.props.weiboData.result : [];
    const meitiData = this.props.meitiData.completed ? this.props.meitiData.result : [];
    const spotData = this.props.spotData.completed ? this.props.spotData.result : [];
    const areaData = this.props.areaData.completed ? this.props.areaData.result : {};
    // const feelData = this.props.feelData.completed ? this.props.feelData.result : [{face: 645, negtive: 124, neuter:350}];

    return (
      <div className="jinyun-one container-bg" style={{overflow:'hidden'}}>
          <div className="left">
            <List1
              style={{ marginBottom: 40}}
              title={(<Title>主要媒体头条新闻</Title>)}
              dataSource={ toutiaoData.length > 0 && toutiaoData }
              scrolled
            />
            <List1
              style={{ marginBottom: 40}}
              title={(<Title>涉津微信热点新闻</Title>)}
              dataSource={ wechatData.length > 0 && wechatData }
            />
            <List2
              title={(<Title>涉津微博热点新闻</Title>)}
              dataSource={ weiboData.length > 0 && weiboData }
            />
          </div>
          <div className="right">
            <div className="right-up">
              <div className="right-up-map">
                <Map
                  title={(<Title>国内媒体涉津新闻</Title>)}
                  className="map"
                  dataSource={ meitiData.length > 0 && meitiData }
                />
                <div className="pop">
                    {/*<Pop dataPop={feelData.length > 0 && {title: '正面舆情', val: feelData[0].face}} num="0" style={{left:450}} color="#5bdc15"/>*/}
                    {/*<Pop dataPop={feelData.length > 0 && {title: '中性舆情', val: feelData[0].neuter}} num="1" style={{left:1000}} color="#ffffff"/>*/}
                    {/*<Pop dataPop={feelData.length > 0 && {title: '负面舆情', val: feelData[0].negtive}} num="2" style={{left:1550}} color="#ff2413"/>*/}
                  <Arealist
                    title={(<Title>地域声量排行</Title>)}
                    dataSource={ areaData }
                  />
                </div>
              </div>
              <div className="right-up-right">
                <Hotword
                  radius={190}
                  widthK={960}
                  heightK={760}
                  title={(<Title>全国热点词</Title>)}
                  dataSource={wordListAll}
                />
                <Bubble
                  title={(<Title>天津热点词</Title>)}
                  width={1020}
                  height={1020}
                  style={{width:1020,height:1020,marginTop:120}}
                  dataSource={data.length > 0 && data}
                />
              </div>
            </div>
            <div className="right-down">
              <Title>事件线索(近三日)</Title>
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
      wordList: state.one.word,
      wordListAll: state.one.allWord,
      meitiData: state.one.meiti,
      toutiaoData: state.one.toutiao,
      wechatData: state.one.wechat,
      weiboData: state.one.weibo,
      spotData: state.one.spot,
      areaData: state.one.area
      // feelData: state.one.feel,

    };
  },
  (dispatch) => {
    return {
      newsAction: bindActionCreators(newsAction, dispatch)
    };
  }
)(One);
