import React from 'react';
import echarts from 'echarts';

import './index.scss';

class Line extends React.Component {
  constructor(props) {
    super(props);
  }
  drawLine(dataSource) {
    this.myChart = echarts.init(this.refs.line);

    const xAxis = [{
      type: 'category',
      data: dataSource[0].x,
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
          width:3
        }
      },
      splitLine:{
        show:false
      }
    }];
    const color = ["#ff0079", "#ecde02", "#33cccc", "#00cc00"];
    let series = dataSource.map((item,i) => ({
      type: 'line',
      lineStyle:{
        normal:{
          color:color[i],
          width:5
        }
      },
      data:item.value,
    }));
    const option = {
      xAxis,
      yAxis,
      series: series
    };
    this.myChart.setOption(option);
  }
  componentDidMount() {
    this.props.dataSource.length > 0 && this.drawLine(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource)) {
      nextProps.dataSource.length > 0 && this.drawLine(nextProps.dataSource);
    }
  }
  render() {
    let {widthL, heightL} = this.props;
    console.log(this.props.dataSource);
    return (
      <div style={this.props.style} className="line-box">
        <div className="title">{this.props.title}</div>
        <div className="lenged">
          {this.props.dataSource.length > 0 && this.props.dataSource.map((item,i) => (
            <div className="icon-box" key={i}><i className={`icon-${i}`}></i><span>{item.key}</span></div>
          ))
          }
        </div>
        <div style={{width: widthL, height: heightL}} className="line" ref="line"></div>
      </div>
    )
  }
}

export default Line;
