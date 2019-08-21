import React from 'react';
import {dateFmt, formatDate} from 'tool/util';

class Topic3 extends React.Component {
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
    if (data){
      return (<div className="topicContent-box">
          <div className="back-topic-content"></div>
          <div className="topicContent">{data}</div>
        </div>);
    }else{
      return null;
    }
  }
  render() {
    let {dataSource} = this.props;
    return (
      <div className="topic1" style={this.props.style}>
        <div className="content3">
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
                {dataSource && this.renderDataSource(dataSource.content)}
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}
Topic3.propTypes = {
  style: React.PropTypes.object
  //dataSource: React.PropTypes.oneOfType([React.propTypes.object, React.propTypes.array])
}

export default Topic3

