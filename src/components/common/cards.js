import React from 'react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="four-cards " style={this.props.style}>
        <div className={`four-cards-bg four-cards-bg-${this.props.bgType}`}>
          <div className="four-cards-content">
            <span>{this.props.title}</span>
            <span>{this.props.bgType === 'b' ? '年服务时间' : '月供稿'}</span>
            <span>{this.props.children}</span>
          </div>
        </div>
      </div>
    )
  }
}
Cards.defaultProps = {
  bgType: 'a',
  title: '津云号',
}
Cards.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  bgType: React.PropTypes.oneOf(['a', 'b']),
  title: React.PropTypes.string,
}
export default Cards;
