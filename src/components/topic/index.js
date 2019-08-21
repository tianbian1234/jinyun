import React from 'react';
import { dateFmt } from 'tool/util';
import './index.scss';
class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idx:0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)
      && nextProps.dataSource.length > 0) {
      if (this.dataInterval) {
        clearInterval(this.dataInterval);
      }
       this.checkData();
    }
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
          <span className="name">{item.title}</span>
          <span className="author">{item.author}</span>
          <span className="date">{dateFmt(item.initDate,'M-d')}</span>
        </li>
      ))
    return null;
  }

// 计算 移动屏数
  staticCount(array) {
    let result = 1;
    if (array && Array.isArray(array)) {
      result = parseInt(array.length / this.props.lineNumber);
    }
    return result;
  }
  //切换显示类型
  checkData() {
      this.dataInterval = setInterval(() => {
      if(this.state.idx >= this.props.dataSource.length -1){
        this.setState({idx:0})
      }else{
        this.setState({idx:++this.state.idx})
      }
    }, 150000)
  }

  componentWillUnmount() {
    if (this.dataInterval) {
      clearInterval(this.dataInterval);
    }
  }

  render() {
    let {dataSource}=this.props;
    let dataNow = dataSource[this.state.idx] || [];
    let isTv=false;
    let isDocC = false;
    if(dataNow && dataNow.subjectType == 'tv'){
      isTv = true;
    }
    if(dataNow && dataNow.subjectType == 'doc' && 'subjectNews' in dataNow && dataNow.subjectNews.length > 0){
      isDocC = true;
    }
    console.log(isTv, isDocC);
    return (
      <div className="topic">
        <div className="title">{this.props.title}</div>
        {
          !isTv && isDocC && dataNow &&
          <div className="content">
            <div className="boxTopic">
              <div className="top">
                <span className="title">{dataNow.subjectName}</span>
                <span className={dataSource.state == 1 ? 'state going':'state finsh'}>{this.getState(dataNow.state)}</span>
              </div>
              <div className="middle">
                <div style={{width: '664px', display: 'inline-block'}}>
                  <span>制定部门:</span>
                  <span>{dataNow.initDeptName}</span>
                </div>
                <div style={{display: 'inline-block'}}>
                  <span>开始时间：</span>
                  <span style={{marginRight: '225px',width:'150px'}}>{dateFmt(dataNow.initDate,'M-d')}</span>
                </div>
                <div style={{display: 'inline-block'}}>
                  <span>优先级:</span>
                  <span>{dataNow.priority}</span>
                </div>

              </div>
              <div className="footer">
                <ul style={{transform: `translateY(${this.props.offset}px)`}}>
                  {
                   dataNow && this.renderDataSource(dataNow.subjectNews)
                  }
                </ul>
              </div>
            </div>
          </div>
        }
        {
          !isTv && !isDocC && dataNow &&
          <div className="content3">
            <div className="boxTopic">
              <div className="top">
                <span className="title">{dataNow.subjectName}</span>
                <span className={dataSource.state == 1 ? 'state going':'state finsh'}>{this.getState(dataNow.state)}</span>
              </div>
              <div className="middle">
                <div style={{width: '664px', display: 'inline-block'}}>
                  <span>制定部门:</span>
                  <span>{dataNow.initDeptName}</span>
                </div>
                <div style={{display: 'inline-block'}}>
                  <span>开始时间：</span>
                  <span style={{marginRight: '225px',width:'150px'}}>{dateFmt(dataNow.initDate,'M-d')}</span>
                </div>
                <div style={{display: 'inline-block'}}>
                  <span>优先级:</span>
                  <span>{dataNow.priority}</span>
                </div>

              </div>
              <div className="footer">
                <div>
                  <div className="topicContent-box">
                    <div className="back-topic-content"></div>
                    <div className="topicContent">{dataNow.content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {
          isTv && dataNow &&
          <div className="content2">
            <div className="boxTopic">
              <div className="top">
                <span className="title">{dataNow.subjectName}</span>
                <span className={dataSource.state == 1 ? 'state going':'state finsh'}>{this.getState(dataNow.state)}</span>
              </div>
              <div className="middle">
                <ul>
                  <li>
                    <span>制定部门：</span>
                    <span style={{width: '320px',display:'inline-block'}}>{dataNow.initDeptName}</span>
                    <span style={{marginLeft: '156px'}}>开始时间：</span>
                    <span style={{marginRight: '225px'}}>{dateFmt(dataNow.initDate,'M-d')}</span>
                    <span>优先级：</span>
                    <span>{dataNow.priority}</span></li>
                  <li>
                    <span>播出方：</span>
                    <span>{dataNow.playType}</span>
                    <span style={{marginLeft: '438px'}}>记者：</span>
                    <span style={{marginRight: '225px'}}>{dataNow.reporter}</span>
                  </li>
                </ul>
              </div>
              <div className="footer">
                <span>{dataNow.subjectNews[0].title}</span>
                <div>
                  {dataNow.subjectNews[0].content}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
Topic.defaultProps = {
  delayTime: 3,
  lineNumber: 3,
  boxHeight: 330,
  scrolled: true,
  isTv: false,
  idx:0,
  offset:0,
};
Topic.propTypes = {
  // dataSource: React.PropTypes.object,
  dataTv: React.PropTypes.object,
  delayTime: React.PropTypes.number, // 滚动的延迟时间,
  scrolled: React.PropTypes.bool // 是否滚屏
}

export default Topic;
