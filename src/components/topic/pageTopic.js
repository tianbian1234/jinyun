import React from 'react';
import Topic1 from './topic1';
import Topic2 from './topic2';
import Topic3 from './topic3';

export default class PageTopic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      subject1:{},
      subject2:{},
      subject3:{},
      page:1
    }
  }
  componentDidMount(){
    this.firstLoad = true;
  }
  componentWillReceiveProps(nextProps) {
    let dataSource =nextProps.dataSource;
    if(this.firstLoad && 'subjectList' in  dataSource && dataSource.subjectList.length > 0){
      this.renderPage(dataSource);
      this.staticInterval(dataSource);
      this.firstLoad = false;
    }else if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)) {
      clearInterval(this.interval);
       this.staticInterval(dataSource);
    }
  }
  //清除定时器
  componentWillUnmount() {
    this.firstLoad = null;
    clearInterval(this.interval);
  }
  staticInterval(dataSource){
    this.interval = setInterval(() => {
      this.renderPage(dataSource);
    },15000)
  }
  renderPage(dataSource){
    let totalPage= ('subjectList' in  dataSource &&  dataSource.subjectList.length);
    console.log('totalPage',totalPage);
    let nowPage = this.state.page >= (totalPage-3) ? 1 : this.state.page+3;
    console.log('nowPage',nowPage);
    this.setState({
      subject1:dataSource.subjectList[this.state.page-1],
      subject2:dataSource.subjectList[this.state.page],
      subject3:dataSource.subjectList[this.state.page+1],
      page:nowPage
    })
  }

  //显示不同的类型
  renderDataType(subject){
    if(subject && 'subjectType' in subject){
       if(subject.subjectType == 'doc'){
         if('subjectNews' in subject &&  subject.subjectNews.length > 0){
           return <Topic1 dataSource={subject}/>
         }else{
           return <Topic3 dataSource={subject}/>
         }
       }else{
          return <Topic2 dataSource={subject}/>
       }
    }
    return null;
  }
  //分页
  pageList(){
    let dataSource = this.props.dataSource;
    let count = 'subjectList' in  dataSource &&  dataSource.subjectList.length ;//总条数
    let { page } = this.state;//当前显示的页的第一条数据
    let totalPage =Math.ceil(count/3);//总页数
    let currtPage = Math.ceil(page/3);//当前第几页
    let pageInterval = Math.floor(currtPage/5);//当前页处于分页的区间
    let element = [];
    for(let i = 1; i <= 5; i++) {
      let n = i + 3*pageInterval;
      if(n > totalPage){ continue}
      element.push(<li key={i} onClick={() => {
        this.setState({
          subject1:dataSource.subjectList[n*3-3],
          subject2:dataSource.subjectList[n*3-2],
          subject3:dataSource.subjectList[n*3-1],
          page:n*3-2
        })
      }}>{n}</li>);
    }
    return element;
  }

  render(){
    let {dataSource} = this.props;
    let {subject1,subject2,subject3} = this.state;
    return(
      <div className="pageToic">
        {dataSource &&
           <div>
             <div className="top">
               {this.renderDataType(subject1)}
             </div>
             <div className="middle">
                 {this.renderDataType(subject2)}
             </div>
             <div className="footer">
                 {this.renderDataType(subject3)}
             </div>
             <div className="pageBox">
               {
                 dataSource &&
                 <ul>
                   <li>&lt;</li>
                   {this.pageList()}
                   <li>&gt;</li>
                 </ul>
               }
             </div>
           </div>
        }
      </div>
    )
  }
}

PageTopic.defaultProps = {
  currentPage:1,//当前页
  pages:3,//一页显示条数
}
PageTopic.propTypes = {
  dataSource: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
  ])
}
