import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsAction from 'actions/news';

import {List1, List2} from 'components/list';
import Hotword from 'components/hot_words';
import Title from 'components/title';
import Bubble from 'components/bubble';
import Heartbeat from 'components/heartbeat';
import Topic from 'components/topic';
import MapTian2 from 'components/map_tianjin/index2';

const test1 = [
  {label:'人民日报',content:'津试点机关事业单位改革紧缺人才点对点'},
  {label:'北方网App',content:'党政主要负责同志要亲力亲为为抓改革扑下'},
  {label:'北方网',content:'李克强给出门农民送上"定心丸"'},
  {label:'人民网',content:'美国制裁伊朗涉中国企业及个人中方已提'},
  {label:'人民日报海外版',content:'党政主要负责同志要亲力亲为为抓改革扑下'},
  {label:'天津电视台',content:'美国制裁伊朗涉中国企业及个人中方已提'},
  {label:'天津晚报',content:'党政主要负责同志要亲力亲为为抓改革扑下'},
  {label:'人民日报',content:'李克强给出门农民送上"定心丸"'},
];

const test2 = [
  {label:'北方网',content:'10分钟形体塑身操】久坐伤骨、……说长时间的不规范的伏坐会损伤骨骼哦，会形成弯腰驼背等身体局部畸形。以下9......'},
  {label:'北方网',content:'10分钟形体塑身操】久坐伤骨、……说长时间的不规范的伏坐会损伤骨骼哦，会形成弯腰驼背等身体局部畸形。以下9......'},
  {label:'北方网',content:'10分钟形体塑身操】久坐伤骨、……说长时间的不规范的伏坐会损伤骨骼哦，会形成弯腰驼背等身体局部畸形。以下9......'}
];
let test3 = [
  {key:'React',value:120},
  {key:'Vue',value:20},
  {key:'英雄联盟',value:30},
  {key:'大数据',value:50},
  {key:'王者荣耀',value:160},
  {key:'热血',value:60},
  {key:'王敬博',value:80},
  {key:'亮剑',value:130},
  {key:'赵本山',value:110},
  {key:'金正恩',value:130},
  {key:'金正日',value:140},
  {key:'金正男',value:120},
  {key:'蜘蛛侠',value:20},
  {key:'钢铁侠',value:30},
  {key:'超人',value:50},
  {key:'闪电侠',value:160},
  {key:'绿灯侠',value:60},
  {key:'黑寡妇',value:80},
  {key:'速度7',value:130},
  {key:'速度8',value:110},
  {key:'蒙面侠',value:130},
  {key:'大蜘蛛',value:140},
  {key:'金刚',value:120},
  {key:'张嘉佳',value:20},
  {key:'王健林',value:30},
  {key:'马云',value:50},
  {key:'王思聪',value:160},
  {key:'张国立',value:60},
  {key:'王刚',value:80},
  {key:'收藏',value:130},
  {key:'玻璃种',value:110},
  {key:'翡翠',value:130},
  {key:'大开门',value:140},
  {key:'青铜器',value:120},
  {key:'时光之城',value:20},
  {key:'暮光之城',value:30},
  {key:'吸血鬼',value:50},
  {key:'狼人',value:160},
  {key:'炮掘',value:60},
  {key:'花无缺',value:80},
  {key:'小鱼儿',value:130},
  {key:'生命',value:110},
  {key:'狼毒花',value:130},
  {key:'奥巴马',value:140},
  {key:'水中花',value:120},
  {key:'井中月',value:20},
  {key:'刘毅敏',value:30},
  {key:'王宝强',value:50},
  {key:'马蓉',value:160},
  {key:'张馨予',value:60},
  {key:'范冰冰',value:80},
  {key:'徐峥',value:130},
  {key:'曹操',value:110},
  {key:'刘备',value:130},
  {key:'诸葛亮',value:140},
  {key:'生命',value:110},
  {key:'狼毒花',value:130},
  {key:'奥巴马',value:140},
  {key:'水中花',value:120},
  {key:'井中月',value:20},
  {key:'刘毅敏',value:30},
  {key:'王宝强',value:50},
  {key:'马蓉',value:160},
  {key:'张馨予',value:60},
  {key:'范冰冰',value:80},
  {key:'徐峥',value:130},
  {key:'曹操',value:110},
  {key:'刘备',value:130},
  {key:'诸葛亮',value:140},
  {key:'生命',value:110},
  {key:'狼毒花',value:130},
  {key:'奥巴马',value:140},
  {key:'水中花',value:120},
  {key:'井中月',value:20},
  {key:'刘毅敏',value:30},
  {key:'王宝强',value:50},
  {key:'马蓉',value:160},
  {key:'张馨予',value:60},
  {key:'范冰冰',value:80},
  {key:'徐峥',value:130},
  {key:'曹操',value:110},
  {key:'刘备',value:130},
  {key:'诸葛亮',value:140},
];
const test4 = [
  {key:'津京冀',value:50},
  {key:'过年',value:60},
  {key:'退房令',value:60},
  {key:'于家堡',value:70},
  {key:'一卡通',value:50},
  {key:'天津站',value:70},
  {key:'大胡同',value:60},
  {key:'滨海新区',value:80},
];
const test5 = [
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
  {title:"中央农办解读一号文件：围绕农业结构调整和改革谋篇布局",dt:'2017年2月7日 13:12'},
];

// 选题列表测试数据
const test = {
  title: '扬帆海河号--2017天津两会测试',
  state: '进行中',
  department:'市发展与改革委员会',
  startTime:'2017-1-5',
  rank:'高',
  viewType:'',
  reporter:'',
  news: [
    {name: '市十六届人大六次会议闭幕', author: '高静', dt: '1-29'},
    {name: '天津市天津市基础教育五年规划', author: '高静', dt: '1-29'},
    {name: '中央农办解读一号文件：围绕农业结构调整和改革谋篇布局', author: '高静', dt: '1-29'},
    {name: '市十六届人大六次会议闭幕', author: '高静', dt: '1-29'},
    {name: '天津市天津市基础教育五年规划', author: '高静', dt: '1-29'},
    {name: '中央农办解读一号文件：围绕农业结构调整和改革谋篇布局', author: '高静', dt: '1-29'},
    {name: '市十六届人大六次会议闭幕', author: '高静', dt: '1-29'},
    {name: '天津市天津市基础教育五年规划', author: '高静', dt: '1-29'},
    {name: '中央农办解读一号文件：围绕农业结构调整和改革谋篇布局', author: '高静', dt: '1-29'},
    {name: '市十六届人大六次会议闭幕', author: '高静', dt: '1-29'},
    {name: '天津市天津市基础教育五年规划', author: '高静', dt: '1-29'},
    {name: '中央农办解读一号文件：围绕农业结构调整和改革谋篇布局', author: '高静', dt: '1-29'},
    {name: '天津市基础教育五年规划4', author: '高静', dt: '1-29'},
    {name: '天津市基础教育五年规划5', author: '高静', dt: '1-29'},
    {name: '天津市基础教育五年规划6', author: '高静', dt: '1-29'},
    {name: '天津市基础教育五年规划7', author: '高静', dt: '1-29'},
  ]
}
const testTv = {
  title: '用"大数据"管理内容',
  state: '已完成',
  department:'市发展与改革委员会',
  startTime:'2017-1-5',
  rank:'高',
  viewType:'网路',
  reporter:'杨芳，张伟',
  news:'天津利用大数据，推广“精细化”市容管理模式',
  content:'2016年，是天津发展进程中很不平凡的一年，在党中央、国务院和市委的坚强领导下，我们全面贯彻党的十八大和十八届三中、四中、五中'
}
class Zone extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.newsAction.fetchToutiaoList();
    this.props.newsAction.fetchWordList();
    this.props.newsAction.fetchWeiboList();
    this.staticIntervalFetch();
  }
  staticIntervalFetch() {
    this.zOneInterval = setInterval(() => {
      this.props.newsAction.fetchToutiaoList();
      this.props.newsAction.fetchWordList();
      this.props.newsAction.fetchWeiboList();
    }, 180000)
  }
  componentWillUnmount() {
    if(this.zOneInterval){
      clearInterval(this.zOneInterval);
    }
  }
  render() {

    const data = this.props.wordList.completed ? this.props.wordList.result : [];
    const toutiaoData = this.props.toutiaoData.completed ? this.props.toutiaoData.result : [];
    const weiboData = this.props.weiboData.completed ? this.props.weiboData.result : [];

    return (
      <div className="jinyun-z-one">
        <div className="left">
          <div className="left-up">
            <div className="left-up-lt">
              <List1
                style={{ marginBottom: 80}}
                title={(<Title style={{width: 360, backgroundSize: '360px 82px',fontSize:44,fontWeight:'bold'}}>主要媒体头条新闻</Title>)}
                dataSource={toutiaoData}
                scrolled
              />
            </div>
            <div className="left-up-lb">
              <List2
                title={(<Title style={{width: 360, backgroundSize: '360px 82px', paddingLeft: 30,fontSize:44,fontWeight:'bold'}}>涉津微博热点新闻</Title>)}
                dataSource={weiboData}
              />
            </div>
            <div className="left-up-rt">
              <Hotword
                radius={300}
                widthK={960}
                heightK={760}
                title={(<Title style={{width: 355, backgroundSize: '325px 82px',fontSize:44,fontWeight:'bold'}}>全国热点词</Title>)}
                dataSource={test3}
              />
            </div>
            <div className="left-up-rb">
              <Bubble
                title={(<Title style={{width: 355, backgroundSize: '325px 82px',fontSize:44,fontWeight:'bold'}}>天津热点词</Title>)}
                width={1000}
                height={1000}
                leftZ={200}
                style={{width:1020,height:1020}}
                dataSource={data}
              />
            </div>
          </div>
          <div className="left-down">
            <Heartbeat
              title={(<Title style={{width: 365,position:'absolute',backgroundSize: '320px 82px',fontSize:44,fontWeight:'bold'}}>事件线索</Title>)}
              dataSource={test5}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className="right">
          <div className="right-up">
            <Topic
              title={(<Title style={{width: 240, backgroundSize: '240px 82px',fontSize:44,fontWeight:'bold'}}>选题列表</Title>)}
              dataSource={test}
              dataTv={testTv}
              scrolled
            />
          </div>
          <div className="right-down">
            <MapTian2 />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) =>{
    return {
      wordList: state.one.word,
      toutiaoData: state.one.toutiao,
      weiboData: state.one.weibo
    };
  },
  (dispatch) => {
    return {
      newsAction: bindActionCreators(newsAction, dispatch)
    };
  }
)(Zone);
