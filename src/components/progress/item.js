import React from 'react';
import './index.scss';
class ProgressItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className ? `jinyun-progress-item ${this.props.className}` : 'jinyun-progress-item'}>
        <div className="progress-line">
          <div className="progress-line-w">
            <span
              className="progress-line-n"
              style={{width: this.props.rate}}
              data-rate={this.props.rate}
            />
          </div>
        </div>
        <div className="progress-content">
          <div className="progress-content-w">
            <div className="progress-content-title">{ this.props.children }</div>
            <div className="progress-content-line">
              <i className="line-item"></i>
            </div>
          </div>
          <div className="progress-content-n">{this.props.number}</div>
        </div>
      </div>
    )
  }
}

ProgressItem.defaultProps = {
  rate: "1%",
  number: 120,
};

ProgressItem.propTypes = {
  rate: React.PropTypes.string,
  number: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};
export default ProgressItem;
