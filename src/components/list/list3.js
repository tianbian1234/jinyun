import React from 'react';
import Item3 from './item3';
import './index.scss';
class List3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  componentDidMount() {
    // this.staticInterval(this.props.dataSource);
      if (this.props.dataSource.length > 0 ) {
        this.staticInterval(this.props.dataSource);
      }
    // this.staticInterval(this.props.dataSource);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)
     && nextProps.dataSource.length > 0) {
      clearInterval(this.interval);
      this.staticInterval(nextProps.dataSource);
    }
  }
  // 生成数据渲染
  renderDataSource(data) {
    const key = Math.random();
    let _this = this;
    if (data && Array.isArray(data))
      return data.map((item, idx) => (
        <Item3
          key={`${key}-${idx}`}
          ranking={item.ranking}
          afterLabel={item.exponent}
          org={_this.props.orgBefore ? item.org : ""}>
          {_this.props.orgPrev? item.org + "-" + item.content : item.content}
        </Item3>
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
    clearInterval(this.interval);
    // if (this.interval) {
    //   clearInterval(this.interval)
    // }
  }

  render() {
    return (
      <div style={this.props.style} className="datahunter-list">
         <div className="title">{this.props.title}</div>
         <div className="content">
           <div className="header">
             <span className="item-span">{this.props.leftLabel || '排名'}</span>
             <span className="item-span" style={{marginLeft: 30}}>{ this.props.centerLabel || '稿件名称'}</span>
             <span className="item-span" style={{marginLeft: 660}}>{this.props.departmentName || ''}</span>
             <span className="header-fixed">{this.props.rightLabel || '影响力指数'}</span>
           </div>
           <div style={{ height: 693, overflow: 'hidden'}}>
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
List3.defaultProps = {
  delayTime: 10,
  lineNumber: 7,
  boxHeight: 693,
  scrolled: true
};

List3.propTypes = {
  title: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
  ]).isRequired,
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({
      content: React.PropTypes.string,
      ranking: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ]),
      exponent: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ])
  })),
  delayTime: React.PropTypes.number, // 滚动的延迟时间,
  scrolled: React.PropTypes.bool // 是否滚屏
}
export default List3;
