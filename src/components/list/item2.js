import React from 'react';

class Item2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="datahunter-list-item2">
        <div className="label">
          <div className="header">
            <span className="header-pg" style={{backgroundImage:`url(${this.props.icon})`}}> </span>
            <span>{this.props.origin}</span>
          </div>
          <span className="time">{this.props.suffix}</span>
        </div>
        <div className="content">{ this.props.children }</div>
      </li>
    )
  }
}
Item2.propTypes = {
  children: React.PropTypes.string,
  origin: React.PropTypes.string,
  suffix: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}
export default Item2;
