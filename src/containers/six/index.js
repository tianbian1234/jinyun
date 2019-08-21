import React from 'react';
import {Listmap} from 'components/list'
import Title from 'components/title';
//加载组件
import User from 'components/user';
import Bar from 'components/bar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personasAction from 'actions/personas';

const test1 = [
  {
    name: "张三",
    tags: [
      "省钱达人",
      "看书",
      "打游戏"
    ],
    consume: [
      "伊势丹商场",
      "宜家家居",
      "凯德MALL"
    ],
    company: {
      district: "和平区",
      street: "和平路",
      detail: "万达广场"
    },
    home: {
      district: "南开区",
      street: "咸阳路",
      detail: "万达广场"
    },
    daily: {
      up: "8:00",
      workBegin: "9:00",
      workEnd: "5:00",
      down: "11:00"
    },
    devices: [
      {
        device: "手机",
        percent: 0.52
      },
      {
        device: "pad",
        percent: 0.28
      },
      {
        device: "PC",
        percent: 0.1
      }
    ],
    workMate: [
      "李四",
      "王五",
      "小王"
    ],
    family: [
      "张老三",
      "张小三"
    ],
    neighbors: [
      "老王",
      "大王"
    ],
    footprint: [
      {
        "longitude": "117.201234",
        "latitude": "39.132464"
      },
      {
        "longitude": "117.201599",
        "latitude": "39.133945"
      }
    ],
    zw: [
      "清河南里小区供暖不热",
      "清河里小区电线老化有火灾隐患"
    ]
  }
];

let test = [
  {area:'武清县',
   type:'wuqing',
    news:[
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
  ]},
  {area:'蓟州县',
  type:'jizhou',
    news:[
    {type:'财经',title:'一月份外汇储备的突破三万亿大关',dt:'1-20'},
    {type:'财经',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'财经',title:'一月份外汇储备的突破三万亿大关',dt:'1-20'},
    {type:'财经',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'一月份外汇储备的突破三万亿大关',dt:'1-20'},
    {type:'财经',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
    {type:'民生',title:'一月份外汇储备的突破三万亿大关',dt:'1-20'},
    {type:'民生',title:'围绕农业结构调整和改革谋篇布局',dt:'1-20'},
  ]}
];
class Six extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.personasAction.fetchPersonasList();
    this.props.personasAction.fetchShootingList();
    this.props.personasAction.fetchUserCareList();
    this.staticIntervalFetch();
  }
  staticIntervalFetch() {
    this.sixInterval = setInterval(() => {
      this.props.personasAction.fetchPersonasList();
      this.props.personasAction.fetchShootingList();
      this.props.personasAction.fetchUserCareList();
    }, 180000);
  }
  componentWillUnmount() {
    if (this.sixInterval) {
      clearInterval(this.sixInterval);
    }
  }
  render() {
    const data = this.props.personasList.completed ? this.props.personasList.result : [];
    const shootList = this.props.shootingList.completed ? this.props.shootingList.result : [];
    const areacare = this.props.usercareList.completed ? this.props.usercareList.result : [];

    return (
      <div className="jinyun-six container-bg" style={{overflow:'hidden'}}>
        <div className="left">
          <div className="left-up">
            <Listmap
              style={{ marginBottom: 80}}
              dataSource={areacare}
            />
          </div>
          <div className="left-center"></div>
          <div className="left-down">
            <Bar
              title={(<Title style={{width: 397, backgroundSize: '240px 82px',fontSize:44,fontWeight:'bold'}}>津云系列APP推荐命中率</Title>)}
              dataSource={shootList}
            />
          </div>
        </div>
        <div className="right">
          <Title>用户画像</Title>
          <User dataSource={data} />
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      personasList: state.personas.personas,
      shootingList: state.personas.shooting,
      usercareList: state.personas.usercare
    };
  },
  (dispatch) => {
    return {
      personasAction: bindActionCreators(personasAction, dispatch)
    };
  }
)(Six);
