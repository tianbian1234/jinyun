import React from 'react';

import './index.scss';

class Userbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="information">
        <div className="top-circle"></div>
        <div className="top-deng"></div>
        <div className="content">
          <i className="left-top"></i>
          <i className="left-bottom"></i>
          <i className="right-top"></i>
          <i className="right-bottom"></i>
          <div className="nei-box">
            <p className="title2"><i></i> <span></span></p>
            <p className="neirong"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Userbox;
