import React from 'react';
import echarts from 'echarts';
import './index.scss';
import 'echarts/lib/chart/map';
import tianjinMap from 'resource/tianjin.json';
echarts.registerMap('tianjin', tianjinMap);

import { formatJson } from 'tool/util';
const geoCoordMap = formatJson(tianjinMap.features);
// const testData = [
//   { "id":"120221","name":"宁河县",  question: {
//     content: "天津清河南里小区10号楼供暖不热，居民多次投诉未解决，房间内温度为16度——20度左右，供暖公司正在解决，尚无结果",
//     address: "和平区清河南里小区10号楼",
//     num: 10,
//     date: "2017年1月23日"
//   }},
//   { "id":"120110","name":"东丽区", question: {
//     content: "天津清河南里小区10号楼供暖不热，居民多次投诉未解决，房间内温度为16度——20度左右，供暖公司正在解决，尚无结果",
//     address: "和平区清河南里小区10号楼",
//     num: 10,
//     date: "2017年1月23日"
//   }},
// ];

const fixedCp = [118.420001,40.016844];
class Mapjin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      data: [
        { "id":"120221","name":"宁河县",  question: {
          content: "天津清河南里小区10号楼供暖不热，居民多次投诉未解决，房间内温度为16度——20度左右，供暖公司正在解决，尚无结果",
          address: "和平区清河南里小区10号楼",
          num: 10,
          date: "2017年1月23日"
        }},
        { "id":"120110","name":"东丽区", question: {
          content: "东丽区里小区10号楼供暖不热，居民多次投诉未解决，房间内温度为16度——20度左右，供暖公司正在解决，尚无结果",
          address: "和平区清河南里小区10号楼",
          num: 20,
          date: "2017年1月23日"
        }}, {  "id": "", name: "河东区", question: {
          content: "天津清河南里小区10号楼供暖不热，居民多次投诉未解决，房间内温度为16度——20度左右，供暖公司正在解决，尚无结果",
          address: "和平区清河南里小区10号楼",
          num: 10,
          date: "2017年1月23日"
        }
        }
      ]
    };

  }
  componentDidMount() {
    this.chart = echarts.init(document.getElementById('tianjin'));
    this.statictInterval();
    //this.staticEchats();
  }
  statictInterval() {
    this.Interval =  setInterval(() => {
      this.staticEchats();
      const a = this.state.data.length;
      const b = this.state.value + 1;
      this.setState({
        value: b === a ? 0 : b
      })

    }, 10000);
  }
  staticConvertData(data) {
    return data.map(item => {
      const geoCoord = geoCoordMap[item.name];
      if (geoCoord) {
        return {
          name: item.name,
          value: geoCoord.concat(item.name.value)
        }
      }
      return null;
    })
  }

  staticeArray(array, index, flag = 1) {
    const newArray = [];
    if (flag === 1) {
      array.forEach((item, idx) => {
        if (idx !== index) {
          newArray.push(item);
        }
      });
    } else if (flag === -1) {
      array.forEach((item, idx) => {
        if (idx === index) {
          newArray.push(item);
        }
      });
    }
    return newArray;
  }
  staticEchats() {
    const odt = this.staticConvertData(this.state.data);
    const ndt = this.staticeArray(odt, this.state.value);
    const adt = this.staticeArray(odt, this.state.value, -1);
    const planePath = 'path://M1081.94,578l1.77-8.531H1089L1079,557l-10,12.472h5.29l1.77,8.531h5.88Z';
    const hotspotOne = {
      name: '民生热点',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: ndt,
      symbolSize: 30,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      itemStyle: {
        normal: {
          color: '#ddb926',
          opacity: 1
        }
      }
    };
    const hotspotTwo = {
      name: '民生热点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: adt,
      symbolSize: 50,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      itemStyle: {
        normal: {
          color: '#ddb926',
          opacity: 1
        }
      }
    };
    this.chart.setOption({
      geo: {
        map: 'tianjin',
        zoom: 1.26,
        itemStyle: {
          normal: { opacity: 0 }
        }
      },
      series: [hotspotOne, hotspotTwo]
    });
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    const index = this.state.value;
    const data = this.state.data && this.state.data[index].question;
    return (
      <div>
        <div>{this.props.title}</div>
        <div className="tianjin-map-new">
          <div className="show-map"></div>
          <div id="tianjin" className="real-map"></div>
        </div>
      </div>
    )
  }
}
export default Mapjin;

