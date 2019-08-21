import React from 'react';
import {dateFmt, formatDate} from 'tool/util';

class Topic1 extends React.Component {
  constructor(props) {
    super(props)
  }
  //获取状态
  getState(state){
    switch(state){
      case 1:
      return '进行中';
      case 2:
      return '已完成';
      default:
      return '已完成';
    }
  }
  // 生成数据渲染
  renderDataSource(data) {
    if (data && Array.isArray(data))
      return data.map((item, idx) => (
        <li key={idx}>
         <div className="name">
           <span>{item.title}</span>
         </div>
         <div className="author">
           <span>{item.author}</span>
         </div>
         <div className="date">
           <span>{dateFmt(item.initDate, 'M-d')}</span>
         </div>
        </li>
      ))
    return null;
  }
  render() {
    let {dataSource} = this.props;
    return (
      <div className="topic1" style={this.props.style}>
        <div className="content">
          {dataSource &&
            <div className="boxTopic">
              <div className="top">
                <span className="title">{dataSource.subjectName}</span>
                <span className={dataSource.state == 1 ? 'state going':'state finsh'}>{this.getState(dataSource.state)}</span>
              </div>
              <div className="middle">
                <div style={{
                  width: '720px'
                }}>
                  <span>制定部门：</span>
                  <span >{dataSource.initDeptName}</span>
                </div>
                <div style={{
                  width: '600px'
                }}>
                  <span >开始时间：</span>
                  <span>{formatDate(dataSource.initDate,true)}</span>
                </div>
                <div style={{
                  width: '400px'
                }}>
                  <span>优先级：</span>
                  <span>{dataSource.priority}</span>
                </div>
              </div>
              <div className="footer">
                <ul>
                  {dataSource && this.renderDataSource(dataSource.subjectNews)}
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
Topic1.propTypes = {
    style: React.PropTypes.object
  //dataSource: React.PropTypes.oneOfType([React.propTypes.object, React.propTypes.array])
}

export default Topic1
