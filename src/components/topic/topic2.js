import React from 'react';
import {dateFmt, formatDate} from 'tool/util';

class Topic2 extends React.Component {
  constructor(props) {
    super(props)
  }
  //获取状态
  getState(state) {
    switch (state) {
      case 1:
        return '进行中';
      case 2:
        return '已完成';
      default:
        return '已完成';
    }
  }
  render() {
    let {dataSource} = this.props;
    return (
      <div className="topic1" style={this.props.style}>
        <div className="content2">
          {dataSource &&
            <div className="boxTopic">
              <div className="top">
                <span className="title">{dataSource.subjectName}</span>
                <span className={dataSource.state == 1 ? 'state going':'state finsh'}>{this.getState(dataSource.state)}</span>
              </div>
              <div className="middle">
                <ul>
                  <li>
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
                  </li>
                  <li>
                    <div style={{
                      width: '720px'
                    }}>
                      <span>播出方：</span>
                      <span>{dataSource.playType}</span>
                    </div>
                    <div style={{
                      width: '600px'
                    }}>
                      <span>记者：</span>
                      <span>{dataSource.reporter}</span>
                    </div>
                  </li>
                </ul>
              </div>
            { dataSource.subjectNews &&
                  <div className="footer">
                      <span>{dataSource.subjectNews[0].title}</span>
                      <div>{dataSource.subjectNews[0].content}</div>
                  </div>
              }
            </div>
          }

        </div>
      </div>
    )
  }
}
Topic2.propTypes = {
  style: React.PropTypes.object
  //dataSource: React.PropTypes.oneOfType([React.propTypes.object, React.propTypes.array])
}

export default Topic2
