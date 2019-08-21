import React from 'react';

import './index.scss';

class Pesoncard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {left,top,right,bottom,type,direct} = this.props;
    return (
      <div style={{left:left,top:top,right:right,bottom:bottom}}  className="box">
        <div className={`back back${type} direct${direct ? 'd':''}`}>
          <img style={direct ? {transform:'rotate(180deg)'}:{}} className="personimg" src={this.props.head} />
          <p className={`content wen${direct ? 'd':''}`} >{this.props.children}</p>
        </div>
      </div>
    )
  }
}

export default Pesoncard
