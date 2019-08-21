import React from 'react';
import echarts from 'echarts';
import { geoCoordMap }  from 'tool/json';
import 'echarts/lib/chart/map';
import './chinaJS/china.js';

import './index.scss';

class Map2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      time:''
    }
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
          name: '北京Top10',
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
          name: '北京Top10',
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
              color: '#ffde00'
            }
          },
          data: dataSource.map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
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
    this.myChart = echarts.init(this.refs.map);
    let num=0;
    this.drawmap(dataSource[num].data);
    this.setState({
      title:dataSource[num].title,
      time:dataSource[num].time
    });
    this.Interval = setInterval(()=>{
      num++;
      if(num >= dataSource.length){
        num = 0;
      }
      console.log("111111111");
      this.drawmap(dataSource[num].data);
      this.setState({
        title:dataSource[num].title,
        time:dataSource[num].time
      });
    },5000);
  }
  componentDidMount() {
    this.drawmap1(this.props.dataSource);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    let {mapWidth,mapHeight,mapLeft,mapTop} = this.props;
    return (
      <div style={this.props.style} className="mapBox2">
        <div className="title">{this.props.title}</div>
        <div
          style={{width:mapWidth,height:mapHeight,left:mapLeft,top:mapTop}}
          ref="map"
          className="mapTu">
        </div>
        <div className="content-box">
          <p className="information">{this.state.title}</p>
          <p className="date">{this.state.time}</p>
        </div>
      </div>
    )
  }
}

export default Map2;
