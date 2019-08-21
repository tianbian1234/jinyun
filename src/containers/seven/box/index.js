import React from 'react';
import Frame from 'components/frame';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={this.props.style}>
        <div className="title">{this.props.title}</div>
        <Frame>{this.props.children}</Frame>
      </div>
    )
  }
}

export default Box;
