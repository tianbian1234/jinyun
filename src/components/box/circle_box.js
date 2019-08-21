import React from 'react';

class CircleBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgClass = this.props.rotated ? 'datahunter-box-circle-bg box-circle-turn' : 'datahunter-box-circle-bg';
    return (
      <div className="datahunter-box">
        <div className="datahunter-box-circle">
          <div className={bgClass} />
          <span className="datahunter-box-span">{this.props.children}</span>
        </div>
      </div>
    )
  }
}
CircleBox.defaultProps = {
  rotated: true
}

CircleBox.propTypes = {
  rotated: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
  ])
};
export default CircleBox;
