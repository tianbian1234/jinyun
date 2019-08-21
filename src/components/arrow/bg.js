import React, { Component, PropTypes } from 'react';
import line from 'resource/line.js';
import Arrow from './index';

export default class Bg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { start, type, len, rotate, pointRotate, lineType } = this.props;
    const lineDataA = line.lineA[lineType];
    const lineDataB = line.lineB[lineType];
    return (
      <div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
        <div>
          {lineDataB.map((line, i) => (
            <div key={i}>
              {line.map((d, j) => (
                <Arrow key={j} {...d} />
              ))}
            </div>
          ))}
        </div>

        <div>
          {lineDataA.map((line, i) => (
            <div key={i}>
              {line.map((d, j) => (
                <Arrow key={j} {...d} />
              ))}
            </div>
          ))}
        </div>

        <div style={{transform: `scale(-1, 1)`}}>
          {lineDataA.map((line, i) => (
            <div key={i}>
              {line.map((d, j) => (
                <Arrow key={j} {...d} />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Arrow.defaultProps = {
  type: 'end',
  start: {x: 100, y: 100},
  len: 800,
  rotate: 0,
  lineData: [
    [
      {type: 'point', start: {x: 1690, y: 510}, len: 100, rotate: 90, pointRotate: 90},
      {type: 'point', start: {x: 1690, y: 610}, len: 440, rotate: 0, pointRotate: 0},
      {type: 'end', start: {x: 2130, y: 610}, len: 185, rotate: 90, pointRotate: 0},

    ], [
      {type: 'point', start: {x: 2130, y: 805}, len: 555, rotate: 180, pointRotate: 90},
      {type: 'point', start: {x: 1575, y: 805}, len: 105, rotate: 90, pointRotate: 0},
      {type: 'point', start: {x: 1575, y: 910}, len: 370, rotate: 180, pointRotate: 0},
      {type: 'point', start: {x: 1205, y: 910}, len: 215, rotate: -90, pointRotate: 90},
      {type: 'end', start: {x: 1205, y: 695}, len: 440, rotate: 180, pointRotate: 0},
    ],[
      {type: 'point', start: {x: 745, y: 725}, len: 425, rotate: 0, pointRotate: 0},
      {type: 'point', start: {x: 1170, y: 725}, len: 215, rotate: 90, pointRotate: 90},
      {type: 'point', start: {x: 1170, y: 940}, len: 435, rotate: 0, pointRotate: 90},
      {type: 'point', start: {x: 1605, y: 940}, len: 100, rotate: -90, pointRotate: 0},
      {type: 'end', start: {x: 1605, y: 840}, len: 490, rotate: 0, pointRotate: 0},
    ],[
      {type: 'end', start: {x: 750, y: 1300}, len: 1085, rotate: 0, pointRotate: 0},
    ],[
      {type: 'end', start: {x: 1845, y: 1335}, len: 1095, rotate: 180, pointRotate: 0},
    ],[
      {type: 'point', start: {x: 750, y: 1920}, len: 420, rotate: 0, pointRotate: 90},
      {type: 'point', start: {x: 1170, y: 1920}, len: 250, rotate: -90, pointRotate: 0},
      {type: 'point', start: {x: 1170, y: 1670}, len: 425, rotate: 0, pointRotate: 0},
      {type: 'point', start: {x: 1590, y: 1670}, len: 100, rotate: 90, pointRotate: 90},
      {type: 'end', start: {x: 1590, y: 1770}, len: 495, rotate: 0, pointRotate: 0},
    ],[
      {type: 'point', start: {x: 2140, y: 1795}, len: 570, rotate: 180, pointRotate: 0},
      {type: 'point', start: {x: 1570, y: 1795}, len: 100, rotate: -90, pointRotate: 90},
      {type: 'point', start: {x: 1570, y: 1695}, len: 365, rotate: 180, pointRotate: 90},
      {type: 'point', start: {x: 1205, y: 1695}, len: 255, rotate: 90, pointRotate: 0},
      {type: 'end', start: {x: 1205, y: 1950}, len: 445, rotate: 180, pointRotate: 0},
    ],
  ],
  lineData2: [
    [
      {type: 'point', start: {x: 2310, y: 820}, len: 280, rotate: -90, pointRotate: 90},
      {type: 'point', start: {x: 2310, y: 540}, len: 220, rotate: 180, pointRotate: 0},
      {type: 'point', start: {x: 2090, y: 540}, len: 165, rotate: -90, pointRotate: 0},
      {type: 'end', start: {x: 2090, y: 375}, len: 80, rotate: 0, pointRotate: 0},
    ], [
      {type: 'point', start: {x: 2615, y: 375}, len: 80, rotate: 0, pointRotate: 0},
      {type: 'point', start: {x: 2695, y: 375}, len: 165, rotate: 90, pointRotate: 0},
      {type: 'point', start: {x: 2695, y: 540}, len: 220, rotate: 180, pointRotate: 90},
      {type: 'end', start: {x: 2475, y: 540}, len: 280, rotate: 90, pointRotate: 0},
    ], [
      {type: 'point', start: {x: 1960, y: 2130}, len: 1100, rotate: 180, pointRotate: 90},
      {type: 'end', start: {x: 860, y: 2130}, len: 490, rotate: 90, pointRotate: 0},
    ], [
      {type: 'end', start: {x: 2395, y: 2450}, len: 165, rotate: 90, pointRotate: 0},
    ], [
      {type: 'point', start: {x: 2645, y: 2170}, len: 1300, rotate: 0, pointRotate: 0},
      {type: 'end', start: {x: 3945, y: 2170}, len: 450, rotate: 90, pointRotate: 0},
    ], [
      {type: 'point', start: {x: 3980, y: 2620}, len: 490, rotate: -90, pointRotate: 90},
      {type: 'end', start: {x: 3980, y: 2130}, len: 1295, rotate: 180, pointRotate: 0},
    ], [
      {type: 'end', start: {x: 2400, y: 1710}, len: 370, rotate: 90, pointRotate: 0},
    ], [
      {type: 'end', start: {x: 2430, y: 2080}, len: 365, rotate: -90, pointRotate: 0},
    ]
  ]
};
Bg.defaultProps = {
  lineType: 'one'
}
