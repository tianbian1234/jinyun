import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import Dot from './dot';
import ComplexCustomOverlay from './complexCustomOverlay';
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

    const myCompOverlay = new ComplexCustomOverlay(new BMap.Point(117.217412,39.141967), dataSource);
    this.bmap.addOverlay(myCompOverlay);
  };

  componentDidMount() {
    this.navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    this.chart = echarts.init(this.refs.map);
    this.chart.setOption(option);
    this.bmap = this.chart.getModel().getComponent('bmap').getBMap();
    this.bmap.addControl(this.navigation);

    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  componentWillUnmount() {
    this.chart = null;
    this.bmap = null;
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
        <Frame width={width} height={height} padding={padding}>
          <div ref="map" className="map-scatter">

          </div>
          <a style={{left: 74, bottom: 74}} className="pan-to" onClick={this.panTo}>定位</a>

        </Frame>
      </div>
    )
  }
}

Bmap.defaultProps = {
  width: '100%',
  height: '100%',
  padding: 70,
  dataSource: []
};
