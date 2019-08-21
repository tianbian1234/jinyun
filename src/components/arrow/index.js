import React, { Component, PropTypes } from 'react';

import './index.scss';

export default class Arrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { start, type, len, rotate, pointRotate } = this.props;


    return (
      <div
        className="arrow"
        style={{
          left: start.x,
          top: start.y,
          width: len,
          transformOrigin: '0 0 0',
          transform: `rotate(${rotate}deg)`
        }}
      >
        <div
          className={type}
          style={{
            transform: `rotate(${type == 'point' ? pointRotate : 0}deg)`
          }}
        ></div>
      </div>
    )
  }
}

Arrow.defaultProps = {
  type: 'end',
  start: {x: 100, y: 100},
  len: 800,
  rotate: 0,
};
