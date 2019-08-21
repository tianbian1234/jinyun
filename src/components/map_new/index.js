import React from 'react';
import echarts from 'echarts';
import { geoCoordMap }  from 'tool/json';
import 'echarts/lib/chart/map';
import './chinaJS/china.js';

import './index.scss';

class Mapnew extends React.Component {
  constructor(props) {
    super(props);
  }
  drawmap(dataSource) {
    let planePath = 'path://M1081.94,578l1.77-8.531H1089L1079,557l-10,12.472h5.29l1.77,8.531h5.88Z';

    let convertData = function (data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];
        let fromCoord = geoCoordMap[dataItem[0].name];
        let toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord]
          });
        }
      }
      return res;
    };

    let color = ['#a6c84c', '#ffa022', '#46bee9'];
    let series = [];
    series.push(
      {
        name: '天津Top10',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 30
        },
        lineStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
              offset: 0, color: '#ffffff' // 0% 处的颜色
            }, {
              offset: 1, color: '#ffde00' // 100% 处的颜色
            }], false),
            width: 6,
            opacity: 1,
            curveness: 0.2
          }
        },
        data: convertData(dataSource)
      },
      {
        name: '天津Top10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
            textStyle:{
              fontSize:36
            }
          }
        },
        symbolSize: 35,
        itemStyle: {
          normal: {
            color: function(data){
              return data.dataIndex === 0 ? "#ff546b" : "#ffde00"
            }
          }
        },
        data: dataSource.map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value:  Array.isArray(geoCoordMap[dataItem[1].name]) && geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });

    let option = {
      tooltip : {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['北京 Top10', '上海 Top10', '广州 Top10'],
        textStyle: {
          color: '#fff'
        },
        selectedMode: 'single'
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: false,
        zoom:this.props.mapZoom,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#404a59',
            opacity:0
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: series
    };
    this.myChart.setOption(option);
  }
  drawmap1(dataSource){
    let num=0;
    this.drawmap(dataSource[num].data);

    this.Interval = setInterval(()=>{
      num++;
      if(num >= dataSource.length){
        num = 0;
      }
      this.drawmap(dataSource[num].data);
    },5000);
  }
  componentDidMount() {
    this.myChart = echarts.init(this.refs.map);
    this.props.dataSource.length > 0 && this.drawmap1(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource)) {
      if(this.Interval){
        clearInterval(this.Interval);
      }
      nextProps.dataSource.length > 0 && this.drawmap1(nextProps.dataSource);
    }
  }
  componentWillUnmount() {
    if(this.Interval){
      clearInterval(this.Interval);
    }
  }
  render() {
    let {mapWidth, mapHeight, mapLeft, mapTop, backShow} = this.props;
    return (
      <div style={this.props.style} className="mapBoxnew">
        <div className="title">{this.props.title}</div>
        {backShow && <div className="back"></div>}
        <div style={{width:mapWidth,height:mapHeight}} className="backmap"></div>
        <div
          style={{width:mapWidth,height:mapHeight,left:mapLeft,top:mapTop}}
          ref="map"
          className="mapTu">
        </div>
      </div>
    )
  }
}

export default Mapnew;
