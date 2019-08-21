import React from 'react';
import echarts from 'echarts';
import { dateFmt } from 'tool/util';

import './index.scss';

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  drawStack(data) {
    if (data.length == 0) {
      return;
    }

    const color = [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#04c1ff' // 0% 处的颜色
      }, {
        offset: 1, color: '#00fff0' // 100% 处的颜色
      }], false),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#a69bf6' // 0% 处的颜色
      }, {
        offset: 1, color: '#8466e6' // 100% 处的颜色
      }], false),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#6effc4' // 0% 处的颜色
      }, {
        offset: 1, color: '#04ff99' // 100% 处的颜色
      }], false),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#f8d95d' // 0% 处的颜色
      }, {
        offset: 1, color: '#d5aa26' // 100% 处的颜色
      }], false),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#fb509e' // 0% 处的颜色
      }, {
        offset: 1, color: '#b9465b' // 100% 处的颜色
      }], false),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0, color: '#b4dbf6' // 0% 处的颜色
      }, {
        offset: 1, color: '#3c9cff' // 100% 处的颜色
      }], false),
    ];

    // const color = [
    //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     offset: 0, color: '#00b4fd' // 0% 处的颜色
    //   }, {
    //     offset: 1, color: '#007cfe' // 100% 处的颜色
    //   }], false),
    //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     offset: 0, color: '#ffd153' // 0% 处的颜色
    //   }, {
    //     offset: 1, color: '#ff8315' // 100% 处的颜色
    //   }], false),
    //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     offset: 0, color: '#ffa5ff' // 0% 处的颜色
    //   }, {
    //     offset: 1, color: '#b52ecc' // 100% 处的颜色
    //   }], false),
    //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     offset: 0, color: '#d1fe83' // 0% 处的颜色
    //   }, {
    //     offset: 1, color: '#c0fe4c' // 100% 处的颜色
    //   }], false),
    //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     offset: 0, color: '#fd998e' // 0% 处的颜色
    //   }, {
    //     offset: 1, color: '#fd5245' // 100% 处的颜色
    //   }], false),
    //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     offset: 0, color: '#cafef5' // 0% 处的颜色
    //   }, {
    //     offset: 1, color: '#79fff8' // 100% 处的颜色
    //   }], false),
    // ];

    const series = data[0].count.map((d, i) => ({
      name: d.deptName,
      type: 'bar',
      stack: 'group0',
      data: data.map(r => r.count[i].count),
      barWidth:this.props.barWidth,
      label: {
        normal: {
          show: false
        }
      },
      itemStyle:{
        normal:{
          color:color[i]
        }
      }
    }));

    let max = 0;
    data.map(d => {
      let sum = 0;
      d.count.map(d => {
        sum += d.count;
      });
      max = Math.max(max, sum);
    });
    const c = Math.pow(10, (max + '').length - 1);
    max = Math.ceil(max / c) * c;

    series.unshift({
      type:'bar',
      itemStyle:{
        normal:{
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#666a6c' // 0% 处的颜色
          }, {
            offset: 1, color: '#d6dde1' // 100% 处的颜色
          }], false),
          opacity:0.3
        }
      },
      data: [max, max, max, max, max, max, max],
      barWidth: this.props.backWidth,
      barGap: this.props.barG,
      animation: false,
    });

    const option = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type: 'category',
          axisLabel:{
            margin: 16,
            textStyle:{
              color:'#ffffff',
              fontSize: 36
            },
          },
          axisTick: {
            alignWithLabel: true,
            length: 10,
            lineStyle: {
              width: 3
            }
          },
          axisLine: {
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0, color: '#045eb9' // 0% 处的颜色
              }, {
                offset: 1, color: '#00ddff' // 100% 处的颜色
              }], false),
              width: 3
            }
          },
          data : data.map(d => dateFmt(d.date, 'd日'))
        }
      ],
      yAxis : [
        {
          type:'value',
          splitLine:{
            show:false
          },
          axisTick: {
            alignWithLabel: true,
            length: 10,
            lineStyle: {
              width: 3
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
          axisLine: {
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0, color: '#045eb9' // 0% 处的颜色
              }, {
                offset: 1, color: '#00ddff' // 100% 处的颜色
              }], false),
              width: 3
            }
          },
        }
      ],
      series: series
    };
    this.myChart.setOption(option);
  }

  componentDidMount() {
    this.myChart = echarts.init(this.refs.stack);
    this.drawStack(this.props.dataSource);
  }

  componentDidUpdate() {
    this.drawStack(this.props.dataSource);
  }

  componentWillUnmount() {
    this.myChart = null;
  }

  render() {
    const { dataSource } = this.props;

    return (
      <div className="stack-box">
        <div className="title">{this.props.title}</div>
        <div className="lenged">
          {dataSource.length > 0 && dataSource[0].count.map((item, i) => (
            <div className="icon-box" key={i}><i className={`icon-${i}`} /><span>{item.deptName}</span></div>
          ))}
        </div>
        <div style={{width:this.props.widthS,height:this.props.heightS}} ref="stack"></div>
      </div>
    )
  }
}

export default Stack;
