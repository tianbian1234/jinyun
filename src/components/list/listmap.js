import React from 'react';
import Item from './itemmap.js';
import Title from 'components/title';
import {dateFmt} from 'tool/util'
import './index.scss'

class ListMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idx: 0
    }
  }
  componentWillMount() {
    // console.log('dataSource',this.props.dataSource);
    // if (this.props.dataSource.length > 0) {
    //   this.staticInterval();
    // }
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource) && nextProps.dataSource.length > 0) {
      clearInterval(this.Interval);
      this.staticInterval();
    }
  }
  staticInterval() {
    this.Interval = setInterval(() => {
      console.log('ss')
      if (this.state.idx >= this.props.dataSource.length - 1) {
        this.setState({idx: 0})
      } else {
        this.setState({
          idx: ++this.state.idx
        })
      }
    }, this.props.intervalTime)
  }
  // 生成数据渲染
  renderDataSource(data) {
    if (data && Array.isArray(data))
      return data.map((item, idx) => (<Item key={idx} source={item.source} dt={dateFmt(item.pubDate, 'M-d')} title={item.title}/>))
    return null;
  }
  //高亮当前的区域
  heightLightArea(type) {
    switch (type) {
      case '和平区':
        return (
          <div className="heping"></div>
        );
      case '河东区':
        return (
          <div className="hedong"></div>
        );
      case '南开区':
        return (
          <div className="nankai"></div>
        );
      case '河西区':
        return (
          <div className="hexi"></div>
        );
      case '红桥区':
        return (
          <div className="hongqiao"></div>
        );
      case '河北区':
        return (
          <div className="hebei"></div>
        );
      case '西青区':
        return (
          <div className="xiqing"></div>
        );
      case '东丽区':
        return (
          <div className="dongli"></div>
        );
      case '北辰区':
        return (
          <div className="beichen"></div>
        );
      case '宝坻区':
        return (
          <div className="baodi"></div>
        );
      case '津南区':
        return (
          <div className="jinnan"></div>
        );
      case '武清区':
        return (
          <div className="wuqing"></div>
        );
      case '滨海新区':
        return (
          <div className="binhaixin"></div>
        );
        case '蓟州区':
          return (
            <div className="jizhou"></div>
          );
        case '宁河区':
          return (
            <div className="ninghe"></div>
          );
        case '静海区':
          return (
            <div className="jinghai"></div>
          );
      default:
        return (
          <div className="wuqing"></div>
        );
    }
  }
  componentWillUnmount(){
    clearInterval(this.Interval);
  }
  render() {
    let {dataSource} = this.props;
    console.log('dataSource-render', dataSource);
    let nowData = dataSource[this.state.idx] || [];
    return (
      <div style={this.props.style} className="datahunter-list">
        <div className="title">
          <Title style={{
            width: 397,
            backgroundSize: '240px 82px',
            fontSize: 44,
            fontWeight: 'bold'
          }}>{nowData && nowData.areaName}用户最关心</Title>
        </div>
        <div className="content3">
          <ul>
            {nowData && this.renderDataSource(nowData.newsList)}
          </ul>
          <div className="contentMap">
            <div className="area">
              <span>当前选择的区域:</span>
              <span>{nowData && nowData.areaName}</span>
            </div>
            <div className="areaLight">
              {nowData && this.heightLightArea(nowData.areaName)}
            </div>
            <div className="mapInfo"></div>
          </div>
        </div>
      </div>
    )
  }
}
ListMap.defaultProps = {
  intervalTime:10000
}

export default ListMap;
