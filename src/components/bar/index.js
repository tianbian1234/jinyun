import React from 'react';
import echarts from 'echarts';

import './index.scss';
class Bar extends React.Component {
  constructor(props) {
    super(props);
  }
  staticEchats(dataSource) {
    const xAxis = [{
      type: 'category',
      data: dataSource.map((item) => {
        let time = new Date(item.sentDate);
        return (time.getMonth()+1)+'月'+time.getDate()+'日';
      }).slice(0,7),
      axisTick: {
        alignWithLabel: true,
        length: 10,
        lineStyle: {
          width: 3
        }
      },
      axisLabel:{
        margin: 24,
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
        margin: 20,
        textStyle:{
          color:'#ffffff',
          fontSize: 36
        },
        formatter: '{value}',
        min:10
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
      splitLine:{
        show:false
      }
    }];
    let option = {
      color: ['#3398DB'],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis,
      yAxis,
      series: [
        {
          name: "大修",
          type: "bar",
          stack: "总量",
          barMaxWidth: 35,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#ff6600' // 0% 处的颜色
              }, {
                offset: 1, color: '#ff0000' // 100% 处的颜色
              }], false),
            }
          },
          barWidth: 24,
          data: dataSource.map((item) => (item.hitNum)).slice(0,7),
        },
        {
          name: "技改",
          type: "bar",
          stack: "基础",
          barMaxWidth: 35,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#67e667' // 0% 处的颜色
              }, {
                offset: 1, color: '#00cc00' // 100% 处的颜色
              }], false),
            }
          },
          barWidth: 24,
          barGap:"150%",
          data: dataSource.map((item) => (item.sendNum)).slice(0,7),
        }
      ]
    };
    this.chart.setOption(option);
  }
  componentDidMount() {
    this.chart = echarts.init(document.getElementById('box_a'));
    this.props.dataSource.length > 0 && this.staticEchats(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource)){
      nextProps.dataSource.length > 0 && this.staticEchats(nextProps.dataSource);
    }
  }
  render() {
    return (
      <div className="datahunter-bar" style={this.props.style}>
        <div className="title">{this.props.title}</div>
        <div className="back1"></div>
        <div className="back2"></div>
        <div className="back3"></div>
        <div className="back4"></div>
        <div className="back5"></div>
        <div className="back6"></div>
        <div className="back7"></div>
        <div className="back8"></div>
        <div className="back9"></div>
        <div className="back10"></div>
        <div className="back11"></div>
        <div className="back12"></div>
        <div className="back13"></div>
        <div className="back14"></div>
        <div id="box_a" style={{width: 1521, height: 900, marginTop:20}}></div>
      </div>
    );
  }
}

export default Bar;
