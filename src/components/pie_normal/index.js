import React from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/pie';

import './index.scss';

class Pienormal extends React.Component {
  constructor(props) {
    super(props);
  }
  drawPie(dataSource) {
    this.myChart = echarts.init(this.refs.pie);
    let option = {
      color:[new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#63b0fd' // 0% 处的颜色
      }, {
        offset: 1, color: '#1dbcf0' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#7652fb' // 0% 处的颜色
      }, {
        offset: 1, color: '#151288' // 100% 处的颜色
      }], false), new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#33cbe7' // 0% 处的颜色
      }, {
        offset: 1, color: '#1290a7' // 100% 处的颜色
      }], false), new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#0d23a9' // 0% 处的颜色
      }, {
        offset: 1, color: '#3987fd' // 100% 处的颜色
      }], false), new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#0d21df' // 0% 处的颜色
      }, {
        offset: 1, color: '#3877ec' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#7e1da7' // 0% 处的颜色
      }, {
        offset: 1, color: '#4e67fa' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#3390c1' // 0% 处的颜色
      }, {
        offset: 1, color: '#2316a8' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#333dc1' // 0% 处的颜色
      }, {
        offset: 1, color: '#3a1294' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#4a6ffb' // 0% 处的颜色
      }, {
        offset: 1, color: '#3e5cdc' // 100% 处的颜色
      }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
        offset: 0, color: '#333dc1' // 0% 处的颜色
      }, {
        offset: 1, color: '#3a1294' // 100% 处的颜色
      }], false)],
      series: [{
        name: '问卷分值比例饼状图',
        type: 'pie',
        selectedMode: 'single',
        label:{
          normal:{
            formatter: function(data){
              return parseInt(data.percent)+"%";
            },
            position:'inner',
            textStyle:{
              color:"#c8cbde",
              fontSize:35
            }
          }
        },
        minAngle: 5,
        itemStyle: {
          normal:{
          },
          emphasis: {
            //阴影的大小
            shadowBlur: 50,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: dataSource.sort(function (a, b) { return b.value - a.value})
      },{
        name: '调查',
        type: 'pie',
        label:{
          normal:{
            show:true,
            formatter: function(data){
              return data.data.title;
            },
            position:"outside",
            textStyle:{
              color:"#c8cbde",
              fontSize:35
            }
          }
        },
        minAngle: 5,
        itemStyle: {
          normal:{
          },
          emphasis: {
            //阴影的大小
            shadowBlur: 50,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: dataSource.sort(function (a, b) { return b.value - a.value})
      }]
    };
    this.myChart.setOption(option);
  }
  componentDidMount() {
    this.props.dataSource.length > 0 && this.drawPie(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource))
    {
      nextProps.dataSource.length > 0 && this.drawPie(nextProps.dataSource);
    }
  }
  render() {
    return(
      <div style={{width:this.props.width,height:this.props.height}} className="pie-box">
        <div className="title">{this.props.title}</div>
        <div style={{width:this.props.width,height:this.props.height-82}} className="pie" ref="pie">
        </div>
      </div>
    )
  }
}

Pienormal.dafaultProps = {
  width:1080,
  height:1521,
};

export default Pienormal

/**
 * Created by a on 2017/2/27.
 */
