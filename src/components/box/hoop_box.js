import React from 'react';

class HoopBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      width: this.props.width,
      height: this.props.height
    };
    return (
      <div className={this.props.type === 1 ? "datahunter-box-hoop" : "datahunter-box-hoop datahunter-box-hoop-1"} style={style}>
          { this.props.children }
      </div>
    )
  }
}
HoopBox.defaultProps = {
  width: 352,
  height: 352
}

HoopBox.propTypes = {
  width: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  height: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
}
export default HoopBox;
