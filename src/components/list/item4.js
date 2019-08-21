import React from 'react';
import './index.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="datahunter-list-item4">
        <span className="data-qu">{this.props.children.key}</span>
        <span className="data-liu">{this.props.children.message}</span>
        <span className="data-hui">{this.props.children.reply}</span>
        <span className="data-rate">{this.props.children.rate}</span>
      </li>
    )
  }
}

export default Item;
