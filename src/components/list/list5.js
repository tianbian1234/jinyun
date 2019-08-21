import React from 'react';

import Item from './item5.js';
import './index.scss';

class List5 extends React.Component {
  constructor(props) {
    super(props);
  }
  // 生成数据渲染
  renderDataSource(data) {
    const key = Math.random();
    if (data && Array.isArray(data))
      return data.map((item, idx) => (
        <Item key={`${key}-${idx}`} afterLabel={item.label} data={data}>{item}</Item>
      ));
    return null;
  }
  render() {
    return (
      <div style={this.props.style} className="datahunter-list datahunter-list-box">
        <div style={{ width: 688, height: 1080 }}>
          <div className="title" style={{whiteSpace:'nowrap'}}>{this.props.title}</div>
          <div className="content2">
            <div className="title3">
              {
                this.props.smallTitle ? (
                  <span className="title3-name">{this.props.smallTitle.name}</span>
                ) : null
              }
              {
                this.props.smallTitle ? (
                  <span className="title3-satisfaction">{this.props.smallTitle.satisfaction}</span>
                ) : null
              }

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

export default List5;
