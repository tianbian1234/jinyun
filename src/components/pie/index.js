import React from 'react';
import echarts from 'echarts';
import 'echarts/lib/chart/pie';

import './index.scss';

class Pie extends React.Component {
    constructor(props) {
      super(props);
    }
    drawPie(dataSource) {
      this.myChart = echarts.init(this.refs.pie);
      const num = dataSource.sort(function (a, b) { return a.value - b.value}).map(item => ({name: item.name, value: item.value*100}));
      let option = {
        toolbox: {
          show: !0,
          itemGap: 5,
          right: 20,
          bottom: 20,
          feature: {
            dataView: {
              show: false,
              readOnly: !1
            },
            magicType: {
              show: !0,
              type: ["pie", "funnel"]
            },
            saveAsImage: {
              show: false,
              name: '问卷调查分值比例饼状图'
            }
          }
        },
        color:[new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#7e1da7' // 0% 处的颜色
        }, {
          offset: 1, color: '#4e67fa' // 100% 处的颜色
        }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#3877ec' // 0% 处的颜色
        }, {
          offset: 1, color: '#0d21df' // 100% 处的颜色
        }], false), new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#33cbe7' // 0% 处的颜色
        }, {
          offset: 1, color: '#1290a7' // 100% 处的颜色
        }], false), new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#45caa0' // 0% 处的颜色
        }, {
          offset: 1, color: '#00616c' // 100% 处的颜色
        }], false), new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#63e597' // 0% 处的颜色
        }, {
          offset: 1, color: '#009a4c' // 100% 处的颜色
        }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#a1d15d' // 0% 处的颜色
        }, {
          offset: 1, color: '#307138' // 100% 处的颜色
        }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#c1b233' // 0% 处的颜色
        }, {
          offset: 1, color: '#9b8314' // 100% 处的颜色
        }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#db9266' // 0% 处的颜色
        }, {
          offset: 1, color: '#a85c2f' // 100% 处的颜色
        }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#4a6ffb' // 0% 处的颜色
        }, {
          offset: 1, color: '#b13835' // 100% 处的颜色
        }], false),new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
          offset: 0, color: '#ff6fd8' // 0% 处的颜色
        }, {
          offset: 1, color: '#d640ad' // 100% 处的颜色
        }], false)],
        series: {
          name: '问卷分值比例饼状图',
          type: 'pie',
          minAngle: 5,
          roseType: 'angle',
          label: {
            normal: {
              formatter: function(data){
                return data.name+" ("+num[data.dataIndex].value.toFixed(2)+"%)";
              },
              position: "insideTopRight",
              textStyle:{
                color:"#c8cbde",
                fontSize:35
              }
            }
          },
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
          data: dataSource.sort(function (a, b) { return a.value - b.value}).map(item => ({name: item.name, value: Math.sqrt(Math.sqrt(item.value))}))
        }
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

Pie.dafaultProps = {
  width:1080,
  height:1521,
};

Pie.propTypes = {
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  })),
}

export default Pie

