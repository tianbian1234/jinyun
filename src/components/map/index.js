/**
 * Created by a on 2017/2/17.
 */
import React from 'react';
import echarts from 'echarts';
import { geoCoordMap }  from 'tool/json';
import 'echarts/lib/chart/map';
import './chinaJS/china.js';

import img1 from './images/markpoint.png';
import img2 from './images/eventBoxPositive.png';
import img0 from './images/eventBoxNegative.png'
import img3 from './images/touming.png';

import './index.scss'

let imgSelect = img2;

const colorSelect=["#61ed15","#ff3f13","#cde0e8"];
class Map extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        imgSelect:img1
      }
    }
    colorMake(data, dataIndex) {
      return colorSelect[data[dataIndex.dataIndex].type];
    }
    colorEffect(data, dataIndex) {
      for(let i =0;i < data.length; i++){
        if(data[i].area == dataIndex.name){
          if(data[i].type == 0){
            imgSelect = img0;
          }else if(data[i].type == 1)
          {
            imgSelect = img1;
          }else{
            imgSelect = img2;
          }
          return colorSelect[data[i].type];
        }
      }
    }
    convertData(data) {
      var res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].area];
        if (geoCoord) {
          res.push({
            name: data[i].area,
            value: geoCoord.concat(data[i].val)
          });
        }
      }
      return res;
    }
    maxHotCityyuan(data, num) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[num].area];
        if (geoCoord) {
          res.push({
            name: data[num].area,
            value: geoCoord.concat(data[num].val),
            type:data[num].type
          });
        }
      }
      return res;
    }
    maxHotCity(data, num) {
      var res = [data[num]];
      res[0].coord = geoCoordMap[res[0].area];
      res[0].name = res[0].area;
      return res;
    }
    handleStr(str) {
      if(str == null)
      {
        return;
      }
      var len = str.length;
      var res = '';
      if(len <= 9)
      {
        return str;
      }else{
        var hang = Math.ceil(len/9);
        if(hang == 1){
          var last1 = len-(hang-1)*9;
          res += str.slice(0,last1)+'\n';
          return res;
        } else if(hang >= 2)
        {
          return str.slice(0,10)+'\n';
        }
      }
    }
    handleStr2(str) {
      if(str == null)
      {
        return;
      }
      var len = str.length;
      var res = '';
      if(len <= 9)
      {
        return '\n';
      }else{
        var hang = Math.ceil(len/9);

        if(hang <= 2)
        {
          for(let i=0;i<hang;i++)
          {
            if(i == 1)
            {
              return str.slice(10,20)+'\n';
            }
          }
        }else{
          for(let i=0;i<hang;i++)
          {
            if(i == 1)
            {
              return str.slice(10,20)+"..."+'\n';
            }
          }
        }

      }
    }
    drawMap1(data, num){
      const _this = this;
      const series = [
        {
          name: '热点新闻',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: _this.convertData(data),
          symbolSize: 30,
          itemStyle: {
            normal: {
              color: "#ff3f13",
              opacity:1
            }
          },
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          mouseOver:false,
          data: _this.maxHotCityyuan(data, num),
          symbolSize: 60,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale:5
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "#61ed15",
            }
          },
          markPoint:{
            symbol:`image://${img2}`,
            symbolSize:[532,282],
            data:_this.maxHotCity(data, num),
            symbolOffset:['-280','140'],
            label:{
              normal:{
                show:true,
                position:['8%','12%'],
                formatter:function(d){
                  var l = _this.handleStr(d.data.title);
                  return l;
                },
                textStyle:{
                  fontFamily:"思源黑体 CN",
                  fontWeight:'normal',
                  color:'#fff',
                  fontSize:42,
                }
              }
            },
          },
        },
        {
          name: 'Top 1',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: _this.maxHotCityyuan(data, num),
          symbolSize: 60,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale:0
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "#61ed15",
            }
          },
          markPoint:{
            symbol:`image://${img3}`,
            symbolSize:[532,282],
            data:_this.maxHotCity(data, num),
            symbolOffset:['-280','140'],
            label:{
              normal:{
                show:true,
                position:['8%','32%'],
                formatter:function(d){
                  let l = _this.handleStr2(d.data.title);
                  return l;
                },
                textStyle:{
                  fontFamily:"思源黑体 CN",
                  fontWeight:'normal',
                  color:'#fff',
                  fontSize:42,
                }
              }
            },
          },
        },
        {
          name: 'Top 2',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: _this.maxHotCityyuan(data, num),
          symbolSize: 60,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale:0
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "#61ed15",
            }
          },
          markPoint:{
            symbol:`image://${img3}`,
            symbolSize:[532,282],
            data:_this.maxHotCity(data, num),
            symbolOffset:['-280','240'],
            label:{
              normal:{
                show:true,
                position:['55%','32%'],
                formatter:function(d){
                  let time = new Date(d.data.date);
                  return time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
                },
                textStyle:{
                  fontFamily:"思源黑体 CN",
                  fontWeight:'normal',
                  color:'#fff',
                  fontSize:42,
                  opacity:0.6
                }
              }
            },
          },
        },
        {
          name: 'Top 3',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: _this.maxHotCityyuan(data, num),
          symbolSize: 60,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale:0
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "#61ed15",
            }
          },
          markPoint:{
            symbol:`image://${img3}`,
            symbolSize:[532,282],
            data:_this.maxHotCity(data, num),
            symbolOffset:['-540','240'],
            label:{
              normal:{
                show:true,
                position:['55%','32%'],
                formatter:function(d){
                  return d.name;
                },
                textStyle:{
                  fontFamily:"思源黑体 CN",
                  fontWeight:'normal',
                  color:'#fff',
                  fontSize:42,
                  opacity:0.6
                }
              }
            },
          },
        },
      ];
      const option = {
        grid:{
          top:10,
          bottom:10
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          zoom:1.12,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111',
              opacity:0
            },
            emphasis: {
              areaColor: '#2a333d',
              opacity:0
            }
          },
        },
        series : series
      };

      this.myChart.on('click', function (params) {
        if(params.componentType == 'markPoint' )
        {
          window.open(params.data.href);
        }
      });

      this.myChart.setOption(option);
    }
    drawMap(hot){
      let num = 0;
      this.drawMap1(hot,0);
      this.mapIntervalM = setInterval(()=>{
        num++;
        if(num >= hot.length){
            num = 0;
        }
        this.drawMap1(hot,num)
      },5000);
    }
    componentDidMount(){
      this.myChart = echarts.init(this.refs.map);
      this.props.dataSource.length > 0 && this.drawMap(this.props.dataSource);
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource && JSON.stringify(this.props.dataSource)
        !== JSON.stringify(nextProps.dataSource)) {
        if(this.mapIntervalM){
          clearInterval(this.mapIntervalM);
        }
        nextProps.dataSource.length > 0 && this.drawMap(nextProps.dataSource);
      }
    }
    componentWillUnmount() {
      if(this.mapIntervalM){
        clearInterval(this.mapIntervalM);
      }
    }
    render(){
      return(
        <div className="mapBox">
          <div className="title">{this.props.title}</div>
          <div ref="map" className="mapTu">

          </div>
        </div>)
    }
}

export default Map;
