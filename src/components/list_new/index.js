import React, { Component, PropTypes } from 'react';

import Slider from '../../components/slider';
import Frame from '../../components/frame';

import './index.scss';

export default class List extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { children, width, height, rows, title, ...other } = this.props;

    if (title) {
      return (
        <Frame width={width} height={height}>
          <div style={{height: '100%', position: 'relative'}}>
            <div style={{height: 80, lineHeight: '80px', fontSize: 40, fontWeight: 'bold', color: '#fff'}}>
              {title}
            </div>
            <div style={{height: '100%', position: 'relative', paddingTop: 80, marginTop: -80, boxSizing: 'border-box'}}>
              <Slider multi={rows} step={rows} {...other}>
                {children}
              </Slider>
            </div>
          </div>
        </Frame>
      )
    }
    return (
      <Frame>
        <Slider multi={rows} step={rows} {...other}>
          {children}
        </Slider>
      </Frame>
    )
  }
}

List.defaultProps = {
  rows: 5,           //每页显示数量
  interval: 5000,
  width: '100%',
  height: '100%',
  horizon: false,
};

List.Item = class Item extends Component {
  constructor(props) {
    super(props);

  }

  static defaultProps = {
    gap: 16
  };

  render() {
    const { children, from, gap = 0 } = this.props;

    return (
      <div className="item--1" style={{paddingTop: gap / 2, paddingBottom: gap / 2}}>
        <div className="content">
          <div>
            {from}
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    )
  }
};
