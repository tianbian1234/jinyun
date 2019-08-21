import React, { Component, PropTypes } from 'react';
import './index.scss';

export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { width, height, padding, children, type } = this.props;
    return (
      <div className="frame--" style={{width, height, padding}}>
        <div role={`frame-${type}`} className="border left-top"></div>
        <div role={`frame-${type}`} className="border right-top"></div>
        <div role={`frame-${type}`} className="border right-bottom"></div>
        <div role={`frame-${type}`} className="border left-bottom"></div>
        <div className="container">
          {children}
        </div>
      </div>
    )
  }
}

Frame.defaultProps = {
  width: '100%',
  height: '100%',
  padding: 40,
  type: 1
};
