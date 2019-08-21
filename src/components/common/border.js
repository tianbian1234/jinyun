import React from 'react';

import './index.scss';
class Border extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { width, height, children, className } = this.props;
    return (
      <div className={ className ? `jinyun-border ${className}` : 'jinyun-border'} style={{width, height }}>
        <span role="lt" className="bd"/>
        <span role="rt" className="bd"/>
        <span role="rb" className="bd"/>
        <span role="lb" className="bd"/>
        <div className="border-box">
          <div className="border-box-bg"></div>
          <div className="border-box-container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Border;
