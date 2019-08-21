import React from 'react';

import Frame from '../../components/frame';
import Gun from 'components/slider/gun';

import './index.scss';

const CARD_WIDTH = 810.5;   //你知道这个值为什么是810.5么?因为背景的宽度是1621

class Heartbeat extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let { width, height, speed, dataSource } = this.props;

    return (
      <Gun width={width} height={height} speed={speed}>
        <div className="beating" style={{width: dataSource.length * CARD_WIDTH}}>
          {dataSource.map((d, i) => (
            <div key={i} className="beating-box" style={{width: CARD_WIDTH}}>
              <Frame type={2} width={525} height={347} padding="45px 40px">
                <div className="beating-card">
                  <p className="multi-overflow-3">{d.title}</p>
                  <small>{d.dt}</small>
                </div>
              </Frame>
            </div>
          ))}
        </div>
      </Gun>
    )

  }
}

Heartbeat.defaultProps = {
  width: '100%',
  height: '100%',
  speed: 2
};

export default Heartbeat;
