import React, { Component, PropTypes } from 'react';

import './index.scss';

window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
      return window.setTimeout(callback, 1000 / 10);
    };
})();

export default class Gun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentWidth: props.contentWidth
    }
  }

  marquee = (horizon) => {
    if (horizon) {
      this.marqueeH();
    } else {
      this.marqueeV();
    }
  };

  marqueeV = () => {
    const { speed } = this.props;

    if(this.refs._content.offsetLeft - this.refs.container.scrollLeft <= 0) {
      this.refs.container.scrollLeft -= this.refs.content.offsetWidth;
    } else {
      this.refs.container.scrollLeft += speed;
    }
    this.requestedFrame = requestAnimationFrame(this.marqueeV);
  };

  marqueeH = () => {
    const { speed } = this.props;

    if(this.refs._content.offsetLeft - this.refs.container.scrollLeft <= 0) {
      this.refs.container.scrollLeft -= this.refs.content.offsetWidth;
    } else {
      this.refs.container.scrollLeft += speed;
    }
    this.requestedFrame = requestAnimationFrame(this.marqueeH);
  };

  run() {
    const { horizon } = this.props;

    this.marquee(horizon);

    this.refs.container.onmouseover = () => {
      cancelAnimationFrame(this.requestedFrame);
    };
    this.refs.container.onmouseout = () => {
      this.marquee(horizon);
    };
  }

  componentDidMount() {
    const { contentWidth } = this.props;

    if (!contentWidth) {
      const { clientWidth = 0 } = this.refs.content;
      this.setState({
        contentWidth: clientWidth
      });
    }

    this.run();
  }

  componentDidUpdate() {
    const { contentWidth } = this.props;

    if (!contentWidth) {
      const { clientWidth = 0 } = this.refs.content;
      if (this.state.contentWidth !== clientWidth) {
        this.setState({
          contentWidth: clientWidth
        });
      }
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestedFrame);
    this.requestedFrame = null;
  }

  render() {
    const { width, height, horizon, children } = this.props;
    const { contentWidth } = this.state;

    return (
      <div className="gun" style={{width, height}}>
        <div ref="container" className="container">
          <div ref="content" style={horizon ? {position: 'absolute', height: '100%'} : {}}>
            {children}
          </div>
          <div ref="_content" style={horizon ? {position: 'absolute', height: '100%', top: 0, left: contentWidth} : {}}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Gun.defaultProps = {
  width: '100%',
  height: '100%',
  contentWidth: 0,
  speed: 2,
  horizon: true,
};
