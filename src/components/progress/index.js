import React from 'react';
import ProgressItem from './item.js';
import ProgressHeader from './header.js';
import './index.scss';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    if (this.props.dataSource && Array.isArray(this.props.dataSource)) {
      this.state.data = this.staticManage(this.props.dataSource);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource &&
      JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)) {
      this.state.data = this.staticManage(nextProps.dataSource);
    }
  }
  staticManage(data) {
    const n = data.map(item => item).sort((a, b) => b.value - a.value );
    let cardinal = 1;
    if (n.length > 0 ) {
      cardinal = n[0].value;
    }
    return n.map(item => ({
      content: item.title,
      number: item.value,
      rate: `${ (item.value / cardinal * 100 ).toFixed(2)}%`
    }))
  }
  renderItem(data) {
    return data.map((item, idx) => {
      return (
        <ProgressItem
          className={this.props.liStyle ? this.props.liStyle : 'jinyun-progress-list'}
          key={idx}
          rate={item.rate}
          number={item.number}
        >
          {item.content}
        </ProgressItem>
      )
    })
  }
  render() {
    return (
      <div className="jinyun-progress">
        {this.props.title}
        <ProgressHeader
          secondElement={this.props.secondElement}
          threeElement={this.props.threeElement}/>
        {this.renderItem(this.state.data)}
      </div>
    )
  }
}
Progress.defaultProps = {
  secondElement: '电台名称',
  threeElement: '收听率'
}
export default Progress;
