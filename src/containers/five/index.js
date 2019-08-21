import React from 'react';

import Map from 'components/map_tianjin';
import Pop from 'components/pop_feelings';
import Hotword from 'components/hot_words/index3';
import Bubble from 'components/bubble';
import Histogram from 'components/histogram';
import Bmap from 'components/bMap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fiveAction from 'actions/five';

import { List1, List4, List5 } from 'components/list';
import Title from 'components/title';
import TianjinMap from 'components/map_tianjin';

class Three extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fiveAction.fetchHotWords();
    this.props.fiveAction.fetchScatters();
    this.props.fiveAction.fetchTopnew();
    this.props.fiveAction.fetchQu();
    this.props.fiveAction.fetchQuman();
    this.props.fiveAction.fetchBumen();
    this.props.fiveAction.fetchBumenman();
    this.props.fiveAction.fetchDp();
    this.props.fiveAction.fetchTag();
    this.props.fiveAction.fetchDianJi();
    this.staticIntervalFetch();
  }
  componentWillReceiveProps(nextProps) {
    //this.props.fiveAction.fetchHotWords();
  }
  staticIntervalFetch() {
    this.fiveinterval = setInterval(() => {
      this.props.fiveAction.fetchHotWords();
      this.props.fiveAction.fetchScatters();
      this.props.fiveAction.fetchTopnew();
      this.props.fiveAction.fetchQu();
      this.props.fiveAction.fetchQuman();
      this.props.fiveAction.fetchBumen();
      this.props.fiveAction.fetchBumenman();
      this.props.fiveAction.fetchDp();
      this.props.fiveAction.fetchTag();
      this.props.fiveAction.fetchDianJi();
    }, 180000);
  }
  componentWillUnmount() {
    if(this.fiveinterval){
      clearInterval(this.fiveinterval);
    }
  }
  render() {
    const hotwords = this.props.hotwords.completed ? this.props.hotwords.result : [];
    const scatters = this.props.scatters.completed ? this.props.scatters.result : [];
    const topnew = this.props.topnew.completed ? this.props.topnew.result : [];
    const qu = this.props.qu.completed ? this.props.qu.result : [];
    const quman = this.props.quman.completed ? this.props.quman.result : [];
    const bumen = this.props.bumen.completed ? this.props.bumen.result : [];
    const bumenman = this.props.bumenman.completed ? this.props.bumenman.result : [];
    const dp = this.props.dp.completed ? this.props.dp.result : [];
    const tag = this.props.tag.completed ? this.props.tag.result : [];
    const aDian = this.props.aDian.completed ? this.props.aDian.result : [];

    return (
      <div className="jinyun-three container-bg">
        <div className="three-left">
          <Hotword
            radius={300}
            widthK={1000}
            heightK={900}
            title={(<Title style={{width: 355, backgroundSize: '325px 82px',fontSize:44,fontWeight:'bold'}}>民生热点(近三个月)</Title>)}
            dataSource={hotwords}
          />
          <div style={{ marginTop: 30}}>
            <div className="title" style={{marginBottom:20}}>
              <Title style={{width: 355, backgroundSize: '325px 82px',fontSize:44,fontWeight:'bold'}}>民生热点分布</Title>
            </div>
            <a href={aDian} target="_blank"><div style={{position:'absolute',width:1449,height:873,zIndex:1000}}></div></a>
            <Bmap.Scatter width={1449} height={873} dataSource={scatters} />
          </div>
          <div style={{ marginTop: 77}}>
            <List1
              dataSource={topnew}
              title={(<Title style={{width: 360, backgroundSize: '360px 82px', paddingLeft: 30,fontSize:44,fontWeight:'bold'}}>民生热点列表</Title>)}
            />
          </div>
        </div>
        <div className="three-right">
            <div className="three-top">
              <TianjinMap
                title={(<Title >按地区民生热点汇总(近三个月)</Title>)}
                dataSource={dp}
              />
              <div className="quhuifu">
                <List4
                  smallTitle={{name:"区",message:"留言",reply:"回复",rate:"回复率"}}
                  title={(<Title style={{width: 458, backgroundSize: '420px 82px',fontSize:44,fontWeight:'bold'}}>区回复率排行(近一个月)</Title>)}
                  dataSource={qu}
                />
                <List5
                  style={{ marginLeft: 40}}
                  smallTitle={{name:"区",satisfaction:"满意度"}}
                  title={(<Title style={{width: 458, backgroundSize: '420px 82px',fontSize:44,fontWeight:'bold'}}>网民满意度(近一个月)</Title>)}
                  dataSource={quman}
                />
              </div>
            </div>
            <div className="three-bottom">
             <Histogram
               title={(<Title style={{width: 360, backgroundSize: '360px 82px', paddingLeft: 30,fontSize:44,fontWeight:'bold'}}>民生热点分类(近三个月)</Title>)}
               style={{ float: 'left'}}
               dataSource={tag}
             />
             <div style={{ float: 'left', marginLeft: 80}}>
               <List4
                 smallTitle={{name:"委办局",message:"留言",reply:"回复",rate:"回复率"}}
                 title={(<Title style={{width: 458, backgroundSize: '420px 82px',fontSize:44,fontWeight:'bold'}}>委办局回复率排行(近一个月)</Title>)}
                 dataSource={bumen}
               />
               <List5
                 style={{ marginLeft: 40}}
                 smallTitle={{name:"委办局",satisfaction:"满意度"}}
                 title={(<Title style={{width: 458, backgroundSize: '420px 82px',fontSize:44,fontWeight:'bold'}}>网民满意度(近一个月)</Title>)}
                 dataSource={bumenman}
               />
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
      hotwords: state.five.hotwords,
      scatters: state.five.scatters,
      topnew: state.five.topnew,
      qu: state.five.qu,
      quman: state.five.quman,
      bumen: state.five.bumen,
      bumenman: state.five.bumenman,
      dp: state.five.dp,
      tag: state.five.tag,
      aDian: state.five.dianA
    };
  },
  (dispatch) => {
    return {
      fiveAction: bindActionCreators(fiveAction, dispatch)
    };
  }
)(Three);
