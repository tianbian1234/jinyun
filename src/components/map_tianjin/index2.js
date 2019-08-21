import React from 'react';
import echarts from 'echarts';
import './index.scss';
import 'echarts/lib/chart/map';
import tianjinMap from 'resource/tianjin.json';
echarts.registerMap('tianjin', tianjinMap);
import { formatDate } from 'tool/util';
import Slider from '../slider';

const fixedCp = [118.420001,40.016844];

const DIANXUN = 5;
const TITLEXUN = 3;
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      valueN: 0,
      valueA: 0,
    };
  }
  componentDidMount() {
    this.chart = echarts.init(document.getElementById('tianjin'));
    if (this.props.dataSource && this.props.dataSource.length > 0 ) {
      this.statictInterval(this.props.dataSource);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource &&
      JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)) {
        this.statictInterval(nextProps.dataSource);
      }
  }
  statictInterval(dataSource) {
    this.staticEchats(dataSource[0], 0, 0);
  }
  handleChangeT =() => {
    let b = this.state.value;
    let d = this.state.valueN;
    let a = this.props.dataSource.length > 0 && this.props.dataSource[d].length;
    let c = this.props.dataSource.length || 0;
    if(c > 0 ){
      b++;
      if(b === a || b >= DIANXUN){
        d++;
        b = 0;
        if(d === c){
          d=0;
        }
        this.setState({
          valueN: d,
          value: b
        });
      }
      this.setState({
        value: b
      });
      console.log(this.props.dataSource[d],d,b);
      this.staticEchats(this.props.dataSource[d], d, b);
    }
  };
  handleChangeR = () => {
    let r = this.state.valueA;
    let count = this.props.dataSource.length > 0 && this.props.dataSource[this.state.valueN][this.state.value].question.length;
    r++;
    if(r >= count || r >= TITLEXUN){
      r = 0;
    }
    this.setState({
      valueA: r
    })
  };
  staticConvertData(dataSource) {
    return dataSource.map(item => ({
      name: item.name,
      value: item.key.split(',')
    }));
  }
  staticConvertScatter(array, index) {
    const newArray = [];
    array.forEach((item, idx) => {
      if (idx !== index) {
        newArray.push(item);
      }
    });
    return newArray;
  }
  staticConvertEffectScatter(array, index) {
    const newArray = [];
    array.forEach((item, idx) => {
      if (idx === index) {
        newArray.push(item);
      }
    });
    return newArray;
  }

  staticEchats(dataSource, numD, numB) {
    const odt = this.staticConvertData(dataSource);
    const sdt = this.staticConvertScatter(odt, numB);
    const edt = this.staticConvertEffectScatter(odt, numB);
    const colorList = [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#f8aeae' // 0% 处的颜色
      }, {
        offset: 1, color: '#ad4b4b' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#bbb4f6' // 0% 处的颜色
      }, {
        offset: 1, color: '#2f0f98' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#72ede0' // 0% 处的颜色
      }, {
        offset: 1, color: '#02758a' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#db4bb4' // 0% 处的颜色
      }, {
        offset: 1, color: '#85035f' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#edd099' // 0% 处的颜色
      }, {
        offset: 1, color: '#ffa13c' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#5df5af' // 0% 处的颜色
      }, {
        offset: 1, color: '#1a8764' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#db8fe6' // 0% 处的颜色
      }, {
        offset: 1, color: '#af44e6' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#fa864c' // 0% 处的颜色
      }, {
        offset: 1, color: '#aa3815' // 100% 处的颜色
      }], false)
    ];
    const hotspotOne = {
      name: '民生热点',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: sdt,
      symbolSize: 30,
      showEffectOn: 'render',
      rippleEffect: {
          brushType: 'stroke'
      },
      itemStyle: {
        normal: {
          color: function(){
            return colorList[parseInt(numD%8)];
          },
          opacity: 1
        }
      }
    };
    const hotspotTwo = {
      name: '民生热点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: edt,
      symbolSize: 100,
      itemStyle: {
           normal: {
               color: '#ddb926',
               opacity: 0.01
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
    let data = null;
    let style = { left: 200, top: -164 };
    if (this.props.dataSource && this.props.dataSource.length > 0 && this.props.dataSource[this.state.valueN] && this.props.dataSource[this.state.valueN].length > 0) {
      data = this.props.dataSource[this.state.valueN][this.state.value].question;
      if (this.props.dataSource[this.state.valueN][this.state.value].key.split(',')[1] > 40.054198) {
         style = {left: 200, top: 1200 }
      }
    }

    return (
      <div>
        <div>{this.props.title}</div>
        <div className="tianjin-map" style={{width: 'auto'}}>
          <div className="show-map"></div>
          <div id="tianjin" className="real-map" style={{width: 1560}}></div>
          <div className={`cards-yellow cards-1`} style={style}>
            <div className="cards-box">
              <p style={{margin:"36px auto"}}>{data && data.length > 0 && data[this.state.valueA].title}<span style={{ float: 'right'}}>相关问题量：{data && data.length > 0 && data[this.state.valueA].num}</span></p>
              <div className="cards-box-content">
                <Slider height="180px" multi="1" step={1} horizon={false} handleChangeT={this.handleChangeT} handleChangeR={this.handleChangeR}>
                  {data && data.length > 0 && data.map((item,i) => (
                    <span key={i} className="cards-box-content-item"><a href={item.url} style={{textDecoration:'none', color:'#ffffff'}} target="_blank">{item.content}</a></span>
                  ))}
                </Slider>
              </div>
              <div className="cards-box-address">
                <p>{data && data.length > 0 && data[this.state.valueA].address}<span style={{ float: 'right'}}>{data && data.length > 0 && formatDate(data[this.state.valueA].date)}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Map;
