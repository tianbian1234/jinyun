import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as spreadAction from 'actions/spread';
import * as personasAction from 'actions/personas';
import * as nineAction from 'actions/cloud';
import * as mediaAction from 'actions/media';

import Stack from 'components/stack';
import Title from 'components/title';
import Mapnew from 'components/map_new';
import Usera from 'components/user_a3';
import Progress from 'components/progress';
import { Cards } from 'components/cards';
import { List3 } from 'components/list';
import Pie from 'components/pie';
import bMap from 'components/bMap';
const test1 = [{title:'京津冀交通一体化加快公交发展"一卡通"12城互联互通',time:"2017年2月7日",data:[
  [{name:'天津'}, {name:'天津',value:95}],
  [{name:'天津'}, {name:'上海',value:95}],
  [{name:'天津'}, {name:'广州',value:90}],
  [{name:'天津'}, {name:'大连',value:80}],
  [{name:'天津'}, {name:'南宁',value:70}],
  [{name:'天津'}, {name:'南昌',value:60}],
  [{name:'天津'}, {name:'拉萨',value:50}],
  [{name:'天津'}, {name:'长春',value:40}],
  [{name:'天津'}, {name:'包头',value:30}],
  [{name:'天津'}, {name:'重庆',value:20}],
  [{name:'天津'}, {name:'常州',value:10}]
]},{title:'京津冀交通一体化加快公交发展"一卡通"12城互联互通',time:"2017年2月7日",data:[
  [{name:'天津'}, {name:'天津',value:95}],
  [{name:'天津'}, {name:'乌鲁木齐',value:95}],
  [{name:'天津'}, {name:'昆明',value:90}],
  [{name:'天津'}, {name:'哈尔滨',value:80}],
]}];
class A3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0
    }
  }

  loop(timestamp = 15000) {    //循环显示用户画像相关数据
    let a = 0;
    this.interval = setInterval(() => {
      a++;
      const person = this.props.personasList.completed ? this.props.personasList.result : [];
      const { idx } = this.state;
      if (person.length == 0) {
        return;
      }
      if (idx + 1 < person.length) {
        this.setState({
          idx: idx + 1
        })
      } else {
        this.setState({
          idx: 0
        })
      }
      if(a == 18) {
        this.props.spreadAction.fetchListenRatio();
        this.props.spreadAction.fetchListenCount();
        this.props.spreadAction.fetchPublicityContent();
        this.props.spreadAction.fetchAuthorSpread();
        this.props.spreadAction.fetchWechatSpread();
        this.props.personasAction.fetchPersonasList();
        this.props.nineAction.fetchRankamountList();
        this.props.mediaAction.fetchDeptNewsCount();
        this.props.spreadAction.fetchSignalPathSpread();
        this.props.spreadAction.fetchAuthorSpread();
      }
    }, timestamp)
  }

  componentWillMount() {
    this.props.spreadAction.fetchListenRatio();
    this.props.spreadAction.fetchListenCount();
    this.props.spreadAction.fetchPublicityContent();
    this.props.spreadAction.fetchAuthorSpread();
    this.props.spreadAction.fetchWechatSpread();
    this.props.personasAction.fetchPersonasList();
    this.props.nineAction.fetchRankamountList();
    this.props.mediaAction.fetchDeptNewsCount();
    this.props.spreadAction.fetchSignalPathSpread();
    this.props.spreadAction.fetchAuthorSpread();
    this.loop(10 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const person = this.props.personasList.completed ? this.props.personasList.result : [];
    const pieList = this.props.pieList.completed ? this.props.pieList.result : [];
    const radioList = this.props.radioList.completed ? this.props.radioList.result : [];
    const rankAmountList = this.props.rankAmountList.completed ? this.props.rankAmountList.result : [];
    const deptNewsCount = this.props.deptNewsCount.completed ? this.props.deptNewsCount.result : [];
    const signalPathList = this.props.signalPathList.completed ? this.props.signalPathList.result : [];
    const authorSpread = this.props.authorSpread.completed ? this.props.authorSpread.result : [];

    let cardData = signalPathList.map((item) => ({content: item.title, org:item.org, date: item.time})) || [];

    const { idx } = this.state;

    return (
      <div className="jinyun-a3 container-bg" style={{overflow:'hidden'}}>
        <div className="up">
          <div className="up-left">
            <div className="up-left-top">
              <div className="listBox">
                <Progress
                  title={(<Title>津云号-月发稿量排行</Title>)}
                  dataSource={rankAmountList}
                  secondElement="津云号名称"
                  threeElement='发稿量'
                />
              </div>
            </div>
            <div className="up-left-down">
              <Stack
                title={(<Title style={{width: 569, backgroundSize: '505px 82px',fontSize:44,fontWeight:'bold'}}>媒体发稿量排行</Title>)}
                widthS={1542}
                barWidth={86}
                backWidth={114}
                barG={'-83%'}
                heightS={680}
                dataSource={deptNewsCount}
              />
            </div>
          </div>
          <div className="up-center">
            <div className="up-center-cards">
              <Cards
                dataSource={cardData}
              />
            </div>
            <Mapnew
              title={(<Title style={{width: 540, backgroundSize: '480px 82px',fontSize:44,fontWeight:'bold'}}>单篇稿件传播路径</Title>)}
              style={{width:"100%",height:"100%",position:"absolute"}}
              mapWidth={1671}
              mapHeight={1314}
              mapLeft={65}
              mapTop={480}
              backShow={true}
              mapZoom={1.07}
              dataSource={signalPathList}
            />
          </div>
          <div className="up-right" style={{marginLeft: 131}}>
            <List3
              title={(<Title>稿件传播力排行(近七日)</Title>)}
              dataSource={authorSpread}
              orgPrev={true}
            />
            <div style={{marginTop: 40}}>
              <Pie
                title={(<Title style={{width: 458, backgroundSize: '420px 82px',fontSize:44,fontWeight:'bold'}}>昨日电视收视排行</Title>)}
                width={1521}
                height={1080}
                dataSource={pieList}
              />
            </div>
          </div>
        </div>
        <div className="down">
          <div className="down-left">
            <Usera
              title={(<Title style={{width: 540, backgroundSize: '480px 82px',fontSize:44,fontWeight:'bold'}}>用户画像</Title>)}
              dataSource={person[idx] && person[idx]}
              dataMan={idx}
            />
          <div className="bdmap" >
            <bMap.Heat dataSource={person[idx] && person[idx].footprint}/>
          </div>
          </div>
          <div className="down-right">
            <Progress
              liStyle="two-li-style"
              title={(<Title>广播收听排行</Title>)}
              dataSource={radioList}
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
      pieList:state.spread.listen_ratio,
      radioList:state.spread.listen_count,
      personasList: state.personas.personas,
      rankAmountList:state.cloud.rankAmount,
      deptNewsCount: state.media.deptNewsCount,
      signalPathList: state.spread.signal_path,
      authorSpread: state.spread.author_spread,
    };
  },
  (dispatch) => {
    return {
      spreadAction: bindActionCreators(spreadAction, dispatch),
      personasAction: bindActionCreators(personasAction, dispatch),
      nineAction: bindActionCreators(nineAction, dispatch),
      mediaAction: bindActionCreators(mediaAction, dispatch),
    };
  }
)(A3);
