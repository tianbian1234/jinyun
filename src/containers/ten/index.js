import React from 'react';
//加载组件
import Title from 'components/title';
import PageTopic from 'components/topic/pageTopic';
import Website from 'components/website';
import Historytoday from 'components/history_today';
import Hotwechat from 'components/hot_wechat';
import Video from './video';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as topicAction from 'actions/enorth_screen'
import * as tenAction from 'actions/ten';

const test1 = ["凤凰","今日俄罗斯","东森","法兰西"];
class Ten extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.topicAction.fetchTopicList();
    this.props.tenAction.fetchWebFaceList();
    this.props.tenAction.fetchHistoryTodayList();
    this.props.tenAction.fetchLatestNewsList();
    this.staticIntervalFetch();
  }
  staticIntervalFetch() {
    this.tenInterval = setInterval(() => {
      this.props.topicAction.fetchTopicList();
      this.props.tenAction.fetchWebFaceList();
      this.props.tenAction.fetchHistoryTodayList();
      this.props.tenAction.fetchLatestNewsList();
    }, 180000);
  }
  componentWillUnmount() {
    if (this.tenInterval) {
      clearInterval(this.tenInterval);
    }
  }
  render() {
   const subjectData = this.props.topicList.completed ? this.props.topicList.result : [];
   const webfaceData = this.props.webfaceList.completed ? this.props.webfaceList.result : [];
   const historytodayData = this.props.historytodayList.completed ? this.props.historytodayList.result.events : [];
   const latestnewsData = this.props.latestnewsList.completed ? this.props.latestnewsList.result : [];

    return (
      <div className="jinyun-ten">
        <div style={{float: 'left', width: 1250, height: '100%', position: 'relative'}}>
          <Video titleC={test1} />
        </div>
        <div className="right">
          <Title>选题列表</Title>
          <PageTopic dataSource={subjectData}/>
        </div>
        <div className="left">
          <div className="left-up">
            <Website dataSource={webfaceData} />
          </div>
          <div className="left-center">
            <Title>历史今天</Title>
            <Historytoday dataSource={historytodayData}/>
          </div>
          <div className="left-down">
            <Title>原创稿件</Title>
            <Hotwechat dataSource={latestnewsData}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      topicList: state.topic.selectTopic,
      webfaceList:state.ten.webfacelist,
      historytodayList:state.ten.historytodaylist,
      latestnewsList:state.ten.latestnewslist,
    };
  },
  (dispatch) => {
    return {
      topicAction: bindActionCreators(topicAction,dispatch),
      tenAction: bindActionCreators(tenAction, dispatch)
    };
  }
)(Ten);
