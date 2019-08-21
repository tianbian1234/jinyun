import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as spreadAction from 'actions/spread';
import * as mediaAction from 'actions/media';

import Title from 'components/title';

import { List3, List6 } from 'components/list';
import Mapnew from 'components/map_new';
import { Cards } from 'components/cards';
import Progress from 'components/progress';
import Pie from 'components/pie';
import Word2 from 'components/word_2d';
import Stack from 'components/stack';
import Map2 from 'components/map2';

class Two extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.spreadAction.fetchListenRatio();
    this.props.spreadAction.fetchListenCount();
    this.props.spreadAction.fetchPublicityContent();
    this.props.spreadAction.fetchStorySpread();
    this.props.spreadAction.fetchAuthorSpread();
    this.props.spreadAction.fetchWechatSpread();
    this.props.spreadAction.fetchSignalPathSpread();
    this.props.mediaAction.fetchDeptNewsCount();
    this.staticIntervalFetch()
  }
  staticIntervalFetch() {
    this.setTwoInterval = setInterval(() => {
      this.props.spreadAction.fetchListenRatio();
      this.props.spreadAction.fetchListenCount();
      this.props.spreadAction.fetchPublicityContent();
      this.props.spreadAction.fetchStorySpread();
      this.props.spreadAction.fetchAuthorSpread();
      this.props.spreadAction.fetchWechatSpread();
      this.props.spreadAction.fetchSignalPathSpread();
      this.props.mediaAction.fetchDeptNewsCount();
    },180000)
  }
  componentWillUnmount() {
    if(this.setTwoInterval){
      clearInterval(this.setTwoInterval);
    }
  }
  render() {
    const PieList = this.props.PieList.completed ? this.props.PieList.result : [];
    const radioList = this.props.radioList.completed ? this.props.radioList.result : [];
    const publicityContent = this.props.publicityContent.completed ? this.props.publicityContent.result : [];
    const storySpread = this.props.storySpread.completed ? this.props.storySpread.result : [];
    const authorSpread = this.props.authorSpread.completed ? this.props.authorSpread.result : [];
    const wechatSpread = this.props.wechatSpread.completed ? this.props.wechatSpread.result : [];
    const signalPathList = this.props.signalPathList.completed ? this.props.signalPathList.result : [];
    const deptNewsCount = this.props.deptNewsCount.completed ? this.props.deptNewsCount.result : [];


    let cardData = signalPathList.map((item) => ({content: item.title, date: item.time, org:item.org})) || [];

    return (
      <div className="jinyun-two container-bg">
        <div className="up">
          <div className="left">
            <div className="left-up">
              <Pie
                title={(<Title style={{width: 458, backgroundSize: '420px 82px',fontSize:44,fontWeight:'bold'}}>昨日电视收视排行</Title>)}
                width={1521}
                height={1080}
                dataSource={PieList.length > 0 && PieList}
              />
            </div>
            <div className="left-down">
              <Progress
                liStyle="two-li-style"
                title={(<Title>广播收听排行</Title>)}
                dataSource={radioList}
              />
            </div>
          </div>
          <div className="right">
            <div className="right-map">
              <div className="up-center-cards">
                <Cards
                  dataSource={cardData}
                />
              </div>
              <Mapnew
                title={(<Title style={{width: 540, backgroundSize: '480px 82px',fontSize:44,fontWeight:'bold'}}>单篇稿件传播路径</Title>)}
                style={{width:"100%",height:"100%",position:"absolute"}}
                mapWidth={2080}
                mapHeight={1622}
                mapLeft={65}
                mapTop={480}
                backShow={true}
                mapZoom={1.07}
                dataSource={signalPathList}
              />
            </div>
            <div className="right-word">
              <Word2
                title={(<Title>津云热点词</Title>)}
                width={950}
                height={600}
                widthD={1100}
                heightD={800}
                left={-150}
                big={90}
                dataSource={publicityContent}
              />
            </div>
            <div className="right-bar">
              <Stack
                title={(<Title style={{width: 569, backgroundSize: '505px 82px',fontSize:44,fontWeight:'bold'}}>媒体发稿量排行</Title>)}
                widthS={930}
                heightS={680}
                barWidth={50}
                barG={'-90%'}
                backWidth={60}
                dataSource={deptNewsCount}
              />
            </div>
          </div>
        </div>
        <div className="down">
          <div className="down-left">
            <List3
              title={(<Title>稿件传播力排行(近七日)</Title>)}
              dataSource={authorSpread}
              orgPrev={true}
              scrolled
            />
          </div>
          <div className="down-center">
            <List6
              title={(<Title style={{width: 420, backgroundSize: '420px 82px', paddingLeft: 40}}>微信传播力排行(近七日)</Title>)}
              dataSource={wechatSpread}
              rightLabel={' '}
              centerLabel="微信公众号"
              scrolled
            />
          </div>
          <div className="down-right">
            <List3
              title={(<Title style={{width: 420, backgroundSize: '420px 82px', paddingLeft: 40}}>作者传播力排行(近七日)</Title>)}
              dataSource={storySpread}
              centerLabel="作者名称"
              departmentName="媒体名称"
              orgBefore={true}
              scrolled
            />
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  (state) => {
    return {
      PieList:state.spread.listen_ratio,
      radioList:state.spread.listen_count,
      publicityContent: state.spread.publicity_content,
      storySpread: state.spread.story_spread,
      authorSpread: state.spread.author_spread,
      wechatSpread: state.spread.wechat_spread,
      signalPathList: state.spread.signal_path,
      deptNewsCount: state.media.deptNewsCount,
    };
  },
  (dispatch) => {
    return {
      spreadAction: bindActionCreators(spreadAction, dispatch),
      mediaAction: bindActionCreators(mediaAction, dispatch),
    };
  }
)(Two);
