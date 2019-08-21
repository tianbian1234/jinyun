import React from 'react';
import './index.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {dataSource} = this.props;
    dataSource.sort((a,b) => {
      return b.value - a.value;
    });
    let length = dataSource.length > 0 ? dataSource[0].value : 1;
    return (
      <div className="datahunter-card">
        <div className="title">{this.props.title}</div>
        <div className="title2">
          <span className="back back2">{this.props.cardPercent || '收听数' }</span>
          <span className="back back1">{this.props.cardName || '电台名称'}</span>
        </div>
        <ul>
          {dataSource.length > 0 && dataSource.map((item,i) =>
          (<li key={i}>
            <div className="scale"><div style={{width: parseInt(item.value/ length * 540)}}></div></div>
            <span className="data-name">{item.title}</span>
            <div className="data-line">
              <i></i>
              <span></span>
            </div>
            <span className="data-rate">{`${item.value}`}</span>
          </li>))}
        </ul>
      </div>
    );
  }
}
Card.propTypes = {
  cardName: React.PropTypes.string,
  cardPercent: React.PropTypes.string,
}

export default Card;
