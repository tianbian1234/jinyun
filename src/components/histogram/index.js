import React from 'react';
import echarts from 'echarts';

class Histogram extends React.Component {
  constructor(props) {
    super(props);
  }
  numberHanding(dataSource) {
    let data = dataSource.map((item) => (item.itemValue));
    let dataN = dataSource.map((item) => (item.itemName));
    let maxData = Math.max.apply(null, data);
    let minData = Math.min.apply(null, data);
    return { data, dataN, maxData, minData };
  };
  staticEchats(dataSource) {
    let { data, dataN, maxData, minData } = dataSource && this.numberHanding(dataSource);
    const xAxis = [{
        type: 'category',
        data: dataN,
        axisTick: {
            alignWithLabel: true,
            length: 10,
            lineStyle: {
              width: 3
            }
        },
        axisLabel:{
          margin: 24,
          rotate: 45,
          show: true,
          interval:0,
          splitNumber: 15,
          textStyle: {
            color:'#ffffff',
            fontSize: 36
          }
        },
        axisLine: {
          lineStyle: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
              offset: 0, color: '#045eb9' // 0% 处的颜色
            }, {
              offset: 1, color: '#00ddff' // 100% 处的颜色
            }], false),
            width: 3
        }
      },
    }];
    const yAxis = [{
      type:'value',
      axisTick: {
          alignWithLabel: true,
          length:10,
          lineStyle:{
            width:3
          }
      },
      axisLabel:{
        margin: 16,
        textStyle:{
          color:'#ffffff',
          fontSize: 36
        },
        min:10
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0, color: '#045eb9' // 0% 处的颜色
          }, {
            offset: 1, color: '#00ddff' // 100% 处的颜色
          }], false),
          width:3
        }
      },
    }];

    const c = Math.pow(10, (maxData + '').length - 1);
    maxData = Math.ceil(maxData / c) * c;
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
        offset: 0, color: '#53b1d9' // 0% 处的颜色
      }, {
        offset: 1, color: '#023f8a' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#db8fe6' // 0% 处的颜色
      }, {
        offset: 1, color: '#af44e6' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#fa864c' // 0% 处的颜色
      }, {
        offset: 1, color: '#aa3815' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#b4dbf6' // 0% 处的颜色
      }, {
        offset: 1, color: '#3c9cff' // 100% 处的颜色
      }], false)
    ];
    let option = {
      color: ['#3398DB'],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '17%',
        containLabel: true
      },
      xAxis,
      yAxis,
      series: [
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: function(params) {
                return colorList[params.dataIndex]
              },
              opacity:0.3
            }
          },
          barWidth: 80,
          barGap: '-81%',
          barCategoryGap:'40%',
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10].map(d => maxData),
          animation: false
        }, {
          name: '直接访问',
          legendHoverLink: false,
          type: 'bar',
          itemStyle: {
          normal:{
            color: function(params) {
              return colorList[params.dataIndex]
            },
          }
        },
        barWidth: 64,
        data: data
      },
    ],
  };
    this.chart.setOption(option);
  }
  componentDidMount() {
    this.chart = echarts.init(document.getElementById('box_a'));
    if (this.props.dataSource && this.props.dataSource.length > 0 ) {
      this.staticEchats(this.props.dataSource[0])
     }
  }
  componentWillReceiveProps(nextProps){
    this.chart = echarts.init(document.getElementById('box_a'));
    if(nextProps.dataSource && nextProps.dataSource.length > 0 && JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)){
       this.staticEchats(nextProps.dataSource[0])
    }
  }
  componentWillUpdate() {
    this.props.dataSource.length > 0 && this.staticEchats(this.props.dataSource[0]);
  }
  render() {
    return (
      <div className="datahunter-card" style={this.props.style}>
        <div className="title">{this.props.title}</div>
        <div id="box_a" style={{width: 1521, height: 900}}></div>
      </div>
    );
  }
}

export default Histogram;
