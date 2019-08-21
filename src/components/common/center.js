import React from 'react';
import Rotate from './rotate.js';
class Center extends React.Component {
  constructor(props) {
    super(props);
  }
  renderRotate(data) {
    if (data && Array.isArray(data)) {
      const elements = data.length > 3 ? data.slice(0, 3) : data;
      return elements.map((item, idx) => (
        <div
          key={idx}
          className={`z-w-item-${idx}`}>
          <Rotate
            type={idx === 0 ? 'p' : 'n'}
            label={item.name}
            colorSet={idx}
            >
            {item.value}
          </Rotate>
        </div>
      ))
    }
    return null;
  }
  render() {
    return (
      <div className="four-center" style={this.props.style}>
        <div className="center-z-w">
          <div className="center-z-n box-rotate"></div>
          <div className="center-z-w-content">{this.props.children}</div>
          <div className="center-z-w-label">
            {this.renderRotate(this.props.rotateElement)}
            {/* <div className="z-w-item-0">
              <Rotate/>
            </div>
            <div className="z-w-item-1">
              <Rotate type="n"/>
            </div>
            <div className="z-w-item-2">
              <Rotate type="n"/>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
Center.PropTypes = {
  rotateElement: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  })
}
export default Center;
