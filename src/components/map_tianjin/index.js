import React from 'react';
import echarts from 'echarts';
import './index.scss';
import 'echarts/lib/chart/map';
import tianjinMap from 'resource/tianjin.json';
echarts.registerMap('tianjin', tianjinMap);
import { formatDate } from 'tool/util';
import Slider from '../slider';

const planePath = 'path://M1081.94,578l1.77-8.531H1089L1079,557l-10,12.472h5.29l1.77,8.531h5.88Z';
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

    // this.Interval =  setInterval(() => {
    //
    //   this.handleChangeT();
    //
    // }, 15000);
  }
  handleChangeT =() => {
    let b = this.state.value;
    let d = this.state.valueN;
    let a = this.props.dataSource.length > 0 && this.props.dataSource[d].length;
    let c = this.props.dataSource.length || 0;
    if(c > 0 ){
      b++;
      if(b >= a || b >= DIANXUN){
        d++;
        b = 0;
        if(d >= c){
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
      // console.log(this.props.dataSource[d][b],d,b);
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
  staticConvertLine(array) {
    const fixedCp = [118.350001,40.016844];
    return array.map(item => ({
      fromName: item.name,
      coords: [item.value, fixedCp]
    }))
  }
  staticEchats(dataSource, numD,numB) {
    const odt = this.staticConvertData(dataSource);
    const sdt = this.staticConvertScatter(odt, numB);
    const edt = this.staticConvertEffectScatter(odt, numB);
    const ldt = this.staticConvertLine(edt);

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
      symbolSize: 50,
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

    const lines = {
        name: ' lines',
        type: 'lines',
        zlevel: 3,
        symbol: ['none', 'circle'],
        symbolSize: 60,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 50
        },
        lineStyle: {
            normal: {
                color: "#f6d705",
                width: 20,
                curveness: 0.2
            }
        },
        data: ldt
    };
    this.chart.setOption({
      geo: {
        map: 'tianjin',
        zoom: 1.26,
        itemStyle: {
         normal: { opacity: 0 }
        }
     },
      series: [hotspotOne, hotspotTwo, lines]
    });
  }


  render() {
    let data = null;
    if (this.props.dataSource && this.props.dataSource.length > 0 && this.props.dataSource[this.state.valueN] && this.props.dataSource[this.state.valueN].length > 0) {
      data = this.props.dataSource[this.state.valueN][this.state.value].question || [];
    }
    return (
      <div>
        <div>{this.props.title}</div>
        <div className="tianjin-map">
          <div className="show-map"></div>
          <div id="tianjin" className="real-map" style={{width: 1600}}></div>
          <div className={`cards cards-1`}>
            <div className="cards-box">
              <p style={{margin:"36px auto"}}>{data && data.length > 0 && data[this.state.valueA].title}<span style={{ float: 'right'}}>相关问题量：{ data && data.length > 0 && data[this.state.valueA].num}</span></p>
              <div className="cards-box-content">
                <Slider height="180px" multi="1" step={1} horizon={false} handleChangeT={this.handleChangeT} handleChangeR={this.handleChangeR}>
                  {data && data.map((item,i) => (
                    <span key={i} className="cards-box-content-item"><a href={item.url} style={{textDecoration:'none', color:'#ffffff'}} target="_blank">{item.content}</a></span>
                  ))}
                </Slider>
              </div>
              <div className="cards-box-address">
                <p>{data && data[this.state.valueA].address}<span style={{ float: 'right'}}>{data && formatDate(data[this.state.valueA].date)}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // componentWillUnmount() {
  //   clearInterval(this.Interval);
  // }
}
export default Map;
