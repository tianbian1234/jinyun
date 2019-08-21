import React from 'react';

import * as nineAction from 'actions/cloud';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Title from 'components/title';
import Progress from 'components/progress';
import Top from './top';
import Box from 'components/box';
import Pie from 'components/pie';
import Tree from 'components/tree';
import { List3, List5 } from 'components/list';
const test3 = [
  {title:'天津人力社保',value:95},
  {title:'天津市房屋维修资金',value:86},
  {title:'天津土地有形市场',value:75},
  {title:'天津民政',value:89},
  {title:'天津司法',value:70},
  {title:'天津律协',value:65},
];

const test_wjb = [{
  ranking: '1',
  content: '收评估沪指微跌 天津自贸区等题',
  exponent: 94
}, {
  ranking: '2',
  content: '天津滨海区大招“八大载体”构',
  exponent: 95
}, {
  ranking: '3',
  content: '天津交通保障民生 将建公交专用',
  exponent: 95
},  {
  ranking: '4',
  content: '天机石安全生产条例',
  exponent: 95
},  {
  ranking: '5',
  content: '天津银鉴局关于天津银行股份有',
  exponent: 95
}, {
  ranking: '6',
  content: '天津元宵市场“遇冷”市场价格与',
  exponent: 95
}, {
  ranking: '7',
  content: '天津滨海区“八大载体”构',
  exponent: 95
}, {
  ranking: '8',
  content: '收评估沪指微跌 天津自贸区等题',
  exponent: 94
}, {
  ranking: '9',
  content: '天津滨海区大招“八大载体”构',
  exponent: 95
}, {
  ranking: '10',
  content: '天津交通保障民生 将建公交专用',
  exponent: 95
},  {
  ranking: '11',
  content: '天机石安全生产条例',
  exponent: 95
},  {
  ranking: '12',
  content: '天津银鉴局关于天津银行股份有',
  exponent: 95
}, {
  ranking: '13',
  content: '天津元宵市场“遇冷”市场价格与',
  exponent: 95
}, {
  ranking: '14',
  content: '天津滨海区“八大载体”构',
  exponent: 95
}];
const test_dd = [
  {
    key: '测试数据',
    satisfaction: '100'
  }, {
    key: '测试数据',
    satisfaction: '100'
  },{
    key: '测试数据',
    satisfaction: '100'
  },{
    key: '测试数据',
    satisfaction: '100'
  },{
    key: '测试数据',
    satisfaction: '100'
  },{
    key: '测试数据',
    satisfaction: '100'
  },
]
const test8 = [
  { name:'电信', value:53 },
  { name:'联通', value:68 },
  { name:'WIFI', value:89 },
  { name:'移动', value:77 },
];
class ContainerNine extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.nineAction.fetchIntakeList();
    this.props.nineAction.fetchRankamountList();
    this.props.nineAction.fetchSubscrtberList();
    this.props.nineAction.fetchNewsreleaseList();
    this.props.nineAction.fetchDownloadList();
    this.props.nineAction.fetchVersionList();
    this.props.nineAction.fetchNetworkList();
    this.props.nineAction.fetchEquipmentList();
    this.staticIntervalFetch();
  }
  staticIntervalFetch() {
    this.nineInterval = setInterval(() => {
      this.props.nineAction.fetchIntakeList();
      this.props.nineAction.fetchRankamountList();
      this.props.nineAction.fetchSubscrtberList();
      this.props.nineAction.fetchNewsreleaseList();
      this.props.nineAction.fetchDownloadList();
      this.props.nineAction.fetchVersionList();
      this.props.nineAction.fetchNetworkList();
      this.props.nineAction.fetchEquipmentList();
    }, 180000);
  }
  componentWillUnmount() {
    if (this.nineInterval) {
      clearInterval(this.nineInterval);
    }
  }
  render() {
    const intakeList = this.props.intakeList.completed ? this.props.intakeList.result : [];
    const rankAmountList = this.props.rankAmountList.completed ? this.props.rankAmountList.result : [];
    const subScriberList = this.props.subScriberList.completed ? this.props.subScriberList.result : [];
    const newsReleaseList = this.props.newsReleaseList.completed ? this.props.newsReleaseList.result : [];
    const downloadListList = this.props.downloadListList.completed ? this.props.downloadListList.result : [];
    const versionList = this.props.versionList.completed ? this.props.versionList.result : [];
    const networkList = this.props.networkList.completed ? this.props.networkList.result : [];
    const equipmentList = this.props.equipmentList.completed ? this.props.equipmentList.result : [];

    console.log(intakeList);

    return (
      <div className="jinyun-nine container-bg">
        <Top
          dataSource={ intakeList }
        />
        <div style={{ marginTop: 64, height: 974}}>
          <div className="jinyun-nine-li" style={{width: 1427}}>
            <Progress
             title={(<Title>津云号-月发稿量排行</Title>)}
             dataSource={rankAmountList}
             secondElement="津云号名称"
             threeElement='发稿量'
           />
          </div>
          <div className="jinyun-nine-li"  style={{width: 1450}}>
            <Progress
             title={(<Title>津云号-订阅数排行</Title>)}
             dataSource={subScriberList}
             secondElement="津云号名称"
             threeElement='订阅数'
           />
          </div>
          <div className="jinyun-nine-li" style={{width: 1447}}>
            <List3
              title={(<Title>津云号-最新新闻发布</Title>)}
              dataSource={newsReleaseList}
              leftLabel="新闻名称"
              centerLabel=" "
              rightLabel="来自"
              scrolled
            />
          </div>
        </div>
        <div className="jinyun-nine-bottom">
          <div className="jinyun-nine-item">
            <List5
              title={(<Title>月下载排行</Title>)}
              dataSource={downloadListList}
            />
          </div>
          <div className="jinyun-nine-item" style={{ width: 610, marginLeft: 130}}>
            <Title>月地域占比分析</Title>
            <div className="jinyun-nine-edition" >
              <div className="jinyun-nine-edition-item">
                <Box.Hoop>
                </Box.Hoop>
                <div className="jinyun-nine-edition-cont">
                  <span>天津</span>
                  <span>{`${(versionList[0] || 0) * 100}%`}</span>
                </div>
              </div>
              <div className="jinyun-nine-edition-item">
                <Box.Hoop
                  type={1}
                  width={318}
                  height={319}>
                </Box.Hoop>
                <div className="jinyun-nine-edition-cont-1">
                  <span>外埠</span>
                  <span>{`${(versionList[1] || 0) * 100}%`}</span>
                </div>
              </div>
            </div>

          </div>
          <div className="jinyun-nine-item" style={{ width: 1450, marginLeft: 155}}>
            <Pie
              title={(<Title>月网络及运营商占比分析</Title>)}
              width={1450}
              height={978}
              dataSource={networkList}
            />
          </div>
          <div className="jinyun-nine-item" style={{ width: 1446, marginLeft: 155}}>
            <Tree
              dataSource={[
                  {
                    children: equipmentList
                  }
              ]}
              title="月设备终端占比分析"/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      intakeList:state.cloud.intakeList,
      rankAmountList:state.cloud.rankAmount,
      subScriberList:state.cloud.subScriber,
      newsReleaseList:state.cloud.newsRelease,
      downloadListList:state.cloud.downloadList,
      versionList:state.cloud.versionList,
      networkList:state.cloud.network,
      equipmentList:state.cloud.equipment,
    };
  },
  (dispatch) => {
    return {
      nineAction: bindActionCreators(nineAction, dispatch)
    };
  }
)(ContainerNine);
