import React from 'react';
import './index.scss';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="datahunter-list-item5">
          <div className="word-box">
            <span className="data-qu">{this.props.children.key}</span>
            <span style={{marginRight:0}} className="data-satisfaction">{`${this.props.children.satisfaction}%`}</span>
          </div>
          <div className="bar" style={{width:620*this.props.children.satisfaction/this.props.data[0].satisfaction}}></div>
      </li>
    )
  }
}

export default Item;
