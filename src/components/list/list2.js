import React from 'react';
import Item2 from './item2';
class List2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  componentDidMount() {
    if (this.props.scrolled && typeof this.props.scrolled === 'bool') {
      if (this.props.dataSource.length > 0 ) {
        this.staticInterval(this.props.dataSource);
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)
     && nextProps.dataSource.length > 0) {
      if(this.interval){
        clearInterval(this.interval);
      }
      this.staticInterval(nextProps.dataSource);
    }
  }
  // 生成数据渲染
  renderDataSource(data) {
    const key = Math.random();
    if (data && Array.isArray(data))
      return data.map((item, idx) => (
        <Item2 key={`${key}-${idx}`} origin={item.origin} icon={item.icon} suffix={item.suffix}>{item.content}</Item2>
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
    if(this.interval){
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div style={this.props.style} className="datahunter-list">
        <div className="title">{this.props.title}</div>
        <div className="content">
          <div style={{ height: 860, overflow: 'hidden'}}>
            <ul className="list" style={{ transform: `translateY(${this.state.offset}px)`}}>
              { this.renderDataSource(this.props.dataSource)}
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
List2.defaultProps = {
  delayTime: 10,
  boxHeight: 876,
  lineNumber: 3,
  scrolled: true
};

List2.propTypes = {
  title: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
  ]).isRequired,
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({
      content: React.PropTypes.string,
      label: React.PropTypes.string
    }))
}

export default List2;
