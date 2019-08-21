import React from 'react';

class ProgressHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jinyun-progress-headers">
        <div className="jinyun-progress-headers-l">
          {this.props.firstElement}
        </div>
        <div className="jinyun-progress-headers-r">
          <div className="headers-r-l">
            <span className="progress-btn">{this.props.secondElement}</span>
          </div>
          <div className="headers-r-r">
            <span className="progress-btn">{this.props.threeElement}</span>
          </div>
        </div>
      </div>
    )
  }
}
ProgressHeader.defaultProps = {
  firstElement: '',
  secondElement: 'APP名称',
  threeElement: '发稿量'
}

ProgressHeader.PropTypes = {
  firstElement: React.PropTypes.string,
  secondElement: React.PropTypes.string,
  threeElement: React.PropTypes.string,
}
export default ProgressHeader;
