import React from 'react';

import Item from './item4.js';
import './index.scss';

class List4 extends React.Component {
  constructor(props) {
    super(props);
  }
  // 生成数据渲染
  renderDataSource(data) {
    const key = Math.random();
    if (data && Array.isArray(data))
      return data.map((item, idx) => (
        <Item key={`${key}-${idx}`} afterLabel={item.label}>{item}</Item>
      ));
    return null;
  }
  render() {
    return (
      <div style={this.props.style} className="datahunter-list datahunter-list-box">
        <div style={{ width: 688, height: 1080 }}>
          <div className="title" style={{whiteSpace:'nowrap'}}>{this.props.title}</div>
          <div className="content2">
            <div className="title2">
              <span className="title2-name">{this.props.smallTitle.name}</span>
              <span className="title2-message">{this.props.smallTitle.message}</span>
              <span className="title2-reply">{this.props.smallTitle.reply}</span>
              <span className="title2-rate">{this.props.smallTitle.rate}</span>
            </div>
            <ul>
              {
                this.renderDataSource(this.props.dataSource)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default List4;
