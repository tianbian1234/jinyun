import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import Dot from './dot';
import option from './option';
import './index.scss';
import Frame from '../../components/frame';

export default class Bmap extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  draw = () => {
    const { dataSource } = this.props;

    this.heatmapOverlay.setDataSet({
      data: dataSource.map(d => ({lng: d.lon, lat: d.lat, count: d.count})),
      max: 100
    });
  };

  componentDidMount() {
    this.navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    this.chart = echarts.init(this.refs.map);
    this.chart.setOption(option);
    this.bmap = this.chart.getModel().getComponent('bmap').getBMap();
    this.bmap.enableScrollWheelZoom();
    this.bmap.addControl(this.navigation);
    this.heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
    this.bmap.addOverlay(this.heatmapOverlay);

    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  componentWillUnmount() {
    this.chart = null;
    this.bmap = null;
    this.heatmapOverlay = null;
    this.navigation = null;
  }

  panTo = () => {
    const center = option.bmap.center;
    this.bmap.panTo(
      new BMap.Point(center[0], center[1])
    );
  }

  render() {
    const { width, height, padding } = this.props;
    return (
      <div className="bmap--" style={{width, height}}>
        <div ref="map" className="map-scatter">

        </div>
        <a style={{left: 43, bottom: 43}} className="pan-to" onClick={this.panTo}>定位</a>
      </div>
    )
  }
}

Bmap.defaultProps = {
  width: '100%',
  height: '100%',
  padding: 70,
  dataSource: [
    {lon: 117.201234, lat: 39.132464, count: 100},
    {lon: 117.201599, lat: 39.133945, count: 75},
  ]
};
