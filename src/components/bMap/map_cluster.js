import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import Dot from './dot';
import ComplexCustomOverlay from './complexCustomOverlay';
import option from './option';
import Frame from '../../components/frame';
import Slider from '../../components/slider';
import Modal from '../../components/modal';

import './index.scss';
import iconCase from './images/icon/事件.png';
import iconPerson from './images/icon/人物.png';
import iconCamera from './images/icon/录像机.png';
import iconUFO from './images/icon/无人机.png';
import iconCar from './images/icon/转播车.png';
import icon4g from './images/icon/4g.png';
import iconPhoto from './images/icon/照相机.png';
import iconCaseCluster from './images/icon/事件-cluster.png';
import iconPersonCluster from './images/icon/人物-cluster.png';
import iconCameraCluster from './images/icon/录像机-cluster.png';
import iconUFOCluster from './images/icon/无人机-cluster.png';
import iconCarCluster from './images/icon/转播车-cluster.png';
import icon4gCluster from './images/icon/4g-cluster.png';
import iconPhotoCluster from './images/icon/照相机-cluster.png';

const icon = {
  case: iconCase,
  person: iconPerson,
  camera: iconCamera,
  ufo: iconUFO,
  car: iconCar,
  '4g': icon4g,
  photo: iconPhoto,
};
const iconCluster = {
  case: iconCaseCluster,
  person: iconPersonCluster,
  camera: iconCameraCluster,
  ufo: iconUFOCluster,
  car: iconCarCluster,
  '4g': icon4gCluster,
  photo: iconPhotoCluster,
};
const colors = {
  case: '#ff0000',
  person: '#fff000',
  camera: '#c717c5',
  ufo: '#00ffa8',
  car: '#ff6000',
  '4g': '#f29b76',
  photo: '#17a0c7'
};
const TYPE_NAME = {
  ufo: '无人机',
  car: '转播车',
  person: '个人',
  camera: '摄像机',
  case: '事件',
  '4g': '4G背包',
  photo: '照相机'
};

const ICON_SIZE = new BMap.Size(82, 81);
const TIP_OFFSET = new BMap.Size(90, 0);
const INFO_OFFSET = new BMap.Size(0, 82);

export default class Bmap extends Component {
  constructor(props) {
    super(props);
    this.marks = {};
    this.state = {
      show: false,
      play: true,
      modalOption: {},
      clusterType: []
    }
  }

  toMarkers = (data = [], type = 'case') => {
    const markers = [];
    let pt, marker, label, opts, infoBox, content;
    for (let i = 0; i < data.length; i++) {
      if (data[i].type !== type) {
        continue;
      }
      pt = new BMap.Point(data[i].lon, data[i].lat);

      marker = new BMap.Marker(pt, {
        icon: new BMap.Icon(
          icon[data[i].type] || icon['case'],
          ICON_SIZE
        )
      });

      opts = {
        position : pt,    // 指定文本标注所在的地理位置
        offset   : TIP_OFFSET    //设置文本偏移量
      };

      label = new BMap.Label(data[i].info.trueName, opts);  // 创建文本标注对象
      label.setStyle({
        fontSize: '40px',
        maxWidth: '546px',
        color: '#000',
        border: '3px solid #ff0000',
        borderColor: colors[type],
        borderRadius: '8px',
        padding: '20px',
        background: '#fff'
      });

      marker.setLabel(label);

      content = `
          <div class="info-box">
            <h2>${TYPE_NAME[data[i].type]}</h2>
            <p><label>名字:&nbsp;</label><span>${data[i].info.trueName}</span></p>
            <p><label>部门:&nbsp;</label><span>${data[i].info.deptName}</span></p>
            <p><label>联系:&nbsp;</label><span class="phone-box">${data[i].info.phone}</span></p>
          </div>
        `

      infoBox = new BMapLib.InfoBox(this.bmap, content, {
        offset: INFO_OFFSET,
        boxClass: 'info-box-container ' + type
      });
      let _pt = pt;
      marker.infoBox = infoBox;
      marker.addEventListener("mouseover", function() {
        this.infoBox.open(_pt);
      });
      marker.addEventListener("mouseout", function() {
        this.infoBox.close();
      });

      markers.push(marker);
    }
    pt = null;
    marker = null;
    label = null;
    opts = null;
    content = null;
    return markers;
  };

  markerClusterer = (map, data = [], type = 'case') => {
    const markers = this.toMarkers(data, type);

    return new BMapLib.MarkerClusterer(map, {
      markers: markers,	//要聚合的标记数组
      // girdSize {Number} 聚合计算时网格的像素大小，默认60
      // maxZoom {Number} 最大的聚合级别，大于该级别就不进行相应的聚合
      // minClusterSize {Number} 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2
      // isAverangeCenter {Boolean} 聚合点的落脚位置是否是所有聚合在内点的平均值，默认为否，落脚在聚合内的第一个点
      styles: [			//自定义聚合后的图标风格
        {
          url: iconCluster[type],	  	//	图片的url地址。(必选)
          size: new BMap.Size(195,140),				//图片的大小。（必选）
          //anchor: new BMap.Size(-85, 0),  //图标定位在地图上的位置相对于图标左上角的偏移值，默认偏移值为图标的中心位置。（可选）
          //offset: new BMap.Size(-85, 0),  //图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性。（可选）
          textSize: 64,  //文字的大小。（可选，默认10）
          textColor: colors[type],  //文字的颜色。（可选，默认black）
        },
      ]
    });
  };

  redraw = (data, type) => {
    if (this.markers[type]) {
      this.markers[type].clearMarkers();
      this.markers[type].addMarkers(this.toMarkers(data, type));
    } else {
      this.markers[type] = this.markerClusterer(this.bmap, data, type);
    }
  };

  draw = () => {
    const { dataSource } = this.props;
    const { clusterType } = this.state;

    if (clusterType.length == 0) {
      ['case', 'person', 'camera', 'ufo', 'car', '4g', 'photo'].map(d => {
        this.redraw(dataSource, d);
      });
    } else {
      ['case', 'person', 'camera', 'ufo', 'car', '4g', 'photo'].map(d => {
        this.markers[d] && this.markers[d].clearMarkers();
      });
      clusterType.map(d => {
        this.redraw(dataSource, d);
      })
    }
  };

  show = (type, data) => {
    this.setState({
      show: true,
      modalOption: {
        type: type,
        url: data.url
      }
    })
  };

  togglePlay = () => {
    this.setState({
      play: !this.state.play
    })
  };

  componentDidMount() {
    this.navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    option.bmap.zoom = 14;
    this.chart = echarts.init(this.refs.map);
    this.chart.setOption(option);
    this.bmap = this.chart.getModel().getComponent('bmap').getBMap();
    this.bmap.addControl(this.navigation);
    this.markers = {};
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  componentWillUnmount() {
    this.chart = null;
    this.bmap = null;
    this.markers = null;
    this.navigation = null;
  }

  setTypes(type) {
    const { clusterType } = this.state;
    let types = [];
    if (clusterType.indexOf(type) > -1) {
      types = clusterType.filter(d => d !== type);
    } else {
      types = [...clusterType, type];
    }

    this.setState({
      clusterType: types
    })
  }

  panTo = () => {
    const center = option.bmap.center;
    this.bmap.panTo(
      new BMap.Point(center[0], center[1])
    );
  };

  render() {
    const { width, height, padding, attMap } = this.props;
    const { show, modalOption, play, clusterType } = this.state;

    return (
      <div className="bmap--" style={{width, height}}>
        <Frame width={width} height={height} padding={padding}>
          <div ref="map" className="map">

          </div>

          <a style={{left: 130, bottom: 750}} className="pan-to" onClick={this.panTo}>定位</a>

          <ul className="legend">
            <li className="legend-photo"><a role={clusterType.indexOf('photo') > -1 ? 'active' : ''} href="javascript:;" onClick={() => this.setTypes('photo')}>摄像机</a></li>
            <li className="legend-4g"><a role={clusterType.indexOf('4g') > -1 ? 'active' : ''} href="javascript:;" onClick={() => this.setTypes('4g')}>4g背包</a></li>
            <li className="legend-camera"><a role={clusterType.indexOf('camera') > -1 ? 'active' : ''} href="javascript:;" onClick={() => this.setTypes('camera')}>摄像机</a></li>
            <li className="legend-person"><a role={clusterType.indexOf('person') > -1 ? 'active' : ''} href="javascript:;" onClick={() => this.setTypes('person')}>记者</a></li>
            <li className="legend-car"><a role={clusterType.indexOf('car') > -1 ? 'active' : ''} href="javascript:;" onClick={() => this.setTypes('car')}>转播车</a></li>
            <li className="legend-ufo"><a role={clusterType.indexOf('ufo') > -1 ? 'active' : ''} href="javascript:;" onClick={() => this.setTypes('ufo')}>无人机</a></li>
          </ul>

          <div className="cards--">
            <a className="play-btn" onClick={this.togglePlay} role={play ? 'stop' : 'play'}>
              {play ? '暂停' : '播放'}
            </a>

            {attMap.length > 0 && <Slider multi={3} height={530} interval={play ? 5000 : 0} next={true} prev={true} loop={true}>
              {attMap.map((d, i) => (
                <div key={i}>
                  <Frame width={784} height={474} padding={48} type={2}>
                    <div className="card--" role={d.attType}>
                      <a onClick={() => this.show(d.attType, d)}><img src={d.icon} alt={d.title}/></a>
                      <h2 style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{d.title}</h2>
                    </div>
                  </Frame>
                </div>
              ))}
            </Slider>}
          </div>
        </Frame>
        <Modal show={show} onHide={() => this.setState({show: false})} >
          <div>
            {modalOption.type == 'image' && (
              <img src={modalOption.url} alt="img"/>
            )}
            {modalOption.type == 'video' && (
              <video width="320" height="240" controls>
                <source src={modalOption.url} />
                您的浏览器不支持,请升级你的浏览器
              </video>
            )}
            {modalOption.type == 'audio' && (
              <audio src={modalOption.url} autoplay>
                您的浏览器不支持 audio 标签。
              </audio>
            )}
          </div>
        </Modal>
      </div>
    )
  }
}

Bmap.defaultProps = {
  width: '100%',
  height: '100%',
  padding: 70,
  dataSource: [],
  attMap: []
};
