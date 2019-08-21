import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
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
    const busLines = [];
    if (dataSource.length > 1) {
      busLines.push(
        {
          coords: dataSource.map(d => [d.lon, d.lat]),
          lineStyle: {
            normal: {
              color: '#ffff00'
            }
          }
        }
      );
    }

    option.bmap.zoom = 16;
    option.series = [{
      type: 'lines',
      coordinateSystem: 'bmap',
      polyline: true,
      data: busLines,
      silent: true,
      lineStyle: {
        normal: {
          // color: '#c23531',
          // color: 'rgb(200, 35, 45)',
          opacity: 0.4,
          width: 4
        }
      },
      progressiveThreshold: 500,
      progressive: 200
    }, {
      type: 'lines',
      coordinateSystem: 'bmap',
      polyline: true,
      data: busLines,
      lineStyle: {
        normal: {
          width: 0
        }
      },
      effect: {
        constantSpeed: 20,
        show: true,
        trailLength: 0.1,
        symbolSize: 5
      },
      zlevel: 1
    }];

    this.chart.setOption(option);
    this.adjust();
  };

  adjust = () => {
    this.bmap = this.chart.getModel().getComponent('bmap').getBMap();

    const { dataSource } = this.props;
    const points = dataSource.map(d => new BMap.Point(d.lon, d.lat));
    const view = this.bmap.getViewport(eval(points));
    const zoom = view.zoom;
    const center = view.center;

    option.bmap.zoom = zoom;
    option.bmap.center = [center.lng, center.lat];
    this.chart.setOption(option);
  };

  componentDidMount() {
    this.chart = echarts.init(this.refs.map);
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  componentWillUnmount() {
    this.chart = null;
  }

  render() {
    const { width, height, padding } = this.props;
    return (
      <div className="bmap--" style={{width, height}}>
        <Frame width={width} height={height} padding={padding}>
          <div ref="map" className="map-scatter">

          </div>
        </Frame>
        <div id="map" style={{display: 'none'}}> </div>
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
