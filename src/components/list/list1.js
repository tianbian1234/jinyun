import React from 'react';
import Item from './item';
import './index.scss';
class List1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  componentDidMount() {
      if (this.props.dataSource.length > 0 ) {
        this.staticInterval(this.props.dataSource);
      }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)
     && nextProps.dataSource.length > 0) {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.staticInterval(nextProps.dataSource);
    }
  }
  // 生成数据渲染
  renderDataSource(data) {
    const key = Math.random();
    this.staticCount();
    if (data && Array.isArray(data))
      return data.map((item, idx) => (
        <Item key={`${key}-${idx}`} afterLabel={item.label} daPingUrl={item.url}>{item.content}</Item>
    ))
    return null;
  }
  // 计算 移动屏数
  staticCount(array) {
    let result = 1;
    if (array && Array.isArray(array)) {
      result =  parseInt(array.length / this.props.lineNumber);
    }
    return result;
  }

  // 加载定时器
  staticInterval(dataSource) {
    const count = this.staticCount(dataSource);
    this.interval = setInterval(() => {
      const offset = this.state.offset - this.props.boxHeight;
      this.setState({
        offset: Math.abs(offset) > (count - 1) * this.props.boxHeight ? 0 : offset
      })
    }, this.props.delayTime * 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div style={this.props.style} className="datahunter-list">
         <div className="title">{this.props.title}</div>
         <div className="content">
           <div style={{ height: 780, overflow: 'hidden'}}>
             <ul style={{ transform: `translateY(${this.state.offset}px)`}}>
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
List1.defaultProps = {
  delayTime: 10,
  lineNumber: 8,
  boxHeight: 792,
  scrolled: true
};

List1.oneOfType = {
  title: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
  ]).isRequired,
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({
      content: React.PropTypes.string,
      label: React.PropTypes.string
  })),
  delayTime: React.PropTypes.number, // 滚动的延迟时间,
  scrolled: React.PropTypes.bool // 是否滚屏
}
export default List1;
