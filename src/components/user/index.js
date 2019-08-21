import React from 'react';

import Userbox from 'components/box_user';
import Pienormal from 'components/pie_normal';
import Pesoncard from 'components/person_card';
import bMap from 'components/bMap';
import Title from 'components/title';
import Frame from 'components/frame';

import './index.scss';
import './animation.scss';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0
    }
  }
  getDataUser(dataSource) {
    let numR = 0;
    this.userInterval = setInterval(()=>{
      numR++;
      if (numR >= dataSource.length){
        numR = 0;
      }
      this.setState({
        num:numR
      });
      console.log(this.state.num)
    },10000)
  }
  componentDidMount() {
    this.props.dataSource.length > 0 && this.getDataUser(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource)){
      if(this.userInterval){
        clearInterval(this.userInterval);
      }
      nextProps.dataSource.length > 0 && this.getDataUser(nextProps.dataSource);
    }
  }
  componentWillUnmount(){
    if(this.userInterval){
      clearInterval(this.userInterval);
    }
  }
  render() {
    let {dataSource} = this.props;
    let num = this.state.num || 0;
    return (
      dataSource.length > 0 && <div className="user">
        <div className="title">{this.props.title}</div>
        <div className="user-box">
          <div className="line">
            <div className="back-dian"></div>
            <div className="event-box">
              <p className="hobby hobby1">{dataSource[num].tags[0]}</p>
              <p className="hobby hobby2">{dataSource[num].tags[1]}</p>
              <p className="hobby hobby3">{dataSource[num].tags[2]}</p>
              <p className="hobby hobby4">{dataSource[num].tags[3]}</p>
              <p className="hobby hobby5">{dataSource[num].tags[4]}</p>
              <p className="hobby hobby6">{dataSource[num].tags[5]}</p>
            </div>
            <div className="guang-nei"></div>
            <div className="huan-nei"></div>
            <div className="huan-wai"></div>
            <div className={this.state.num %2==0 ? "man" : "man1"}></div>
            <p className="name">{dataSource[num].name}</p>
          </div>
          <div className="information box-1">
            <div className="top-circle"></div>
            <div className="top-deng"></div>
            <div className="content">
              <i className="left-top"></i>
              <i className="left-bottom"></i>
              <i className="right-top"></i>
              <i className="right-bottom"></i>
              <div className="nei-box">
                <p className="title2"><i></i> <span>常去地点</span></p>
                <p className="neirong">{dataSource[num].consume.map(item => {return `${item} `})}</p>
              </div>
            </div>
          </div>
          {/*<div className="information box-2">*/}
            {/*<div className="top-circle"></div>*/}
            {/*<div className="top-deng"></div>*/}
            {/*<div className="content">*/}
              {/*<i className="left-top"></i>*/}
              {/*<i className="left-bottom"></i>*/}
              {/*<i className="right-top"></i>*/}
              {/*<i className="right-bottom"></i>*/}
              {/*<div className="nei-box">*/}
                {/*<p className="title2"><i></i> <span>家庭住址</span></p>*/}
                {/*<p className="neirong">{`${dataSource[num].home.district} ${dataSource[num].home.street} ${dataSource[num].home.detail}`}</p>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
          <div className="information box-3">
            <div className="top-circle"></div>
            <div className="top-deng"></div>
            <div className="content">
              <i className="left-top"></i>
              <i className="left-bottom"></i>
              <i className="right-top"></i>
              <i className="right-bottom"></i>
              <div className="nei-box">
                <p className="title2"><i></i> <span>工作地点</span></p>
                <p className="neirong">{`${dataSource[num].company.district} ${dataSource[num].company.street} ${dataSource[num].company.detail}`}</p>
              </div>
            </div>
          </div>
          <div className="information box-4">
            <div className="top-circle"></div>
            <div className="top-deng"></div>
            <div className="content">
              <i className="left-top"></i>
              <i className="left-bottom"></i>
              <i className="right-top"></i>
              <i className="right-bottom"></i>
              <div className="nei-box">
                <p className="title2"><i></i><span>家庭住址</span></p>
                <p className="neirong">{`${dataSource[num].home.district} ${dataSource[num].home.street} ${dataSource[num].home.detail}`}</p>
                {/*<p className="title2"><i></i> <span>作息时间</span></p>*/}
                {/*<p className="neirong">{`起床:${dataSource[num].daily.up} 上班:${dataSource[num].daily.workBegin} 下班:${dataSource[num].daily.workEnd} 睡觉:${dataSource[0].daily.down}`}</p>*/}
              </div>
            </div>
          </div>
          <div className="information box-5">
            <div className="top-circle"></div>
            <div className="top-deng"></div>
            <div className="content">
              <i className="left-top"></i>
              <i className="left-bottom"></i>
              <i className="right-top"></i>
              <i className="right-bottom"></i>
              <div className="nei-box">
                <p className="title2"><i></i> <span>常用设备</span></p>
                <div>
                  <Pienormal
                    width={430}
                    height={350}
                    dataSource={dataSource[num].devices.map((item)=>({title:item.device,value:item.percent}))}
                  />
                </div>
              </div>
            </div>
          </div>
          {'zw' in dataSource[num] && dataSource[num].zw.length > 0 && <div className="line-min"></div>}
          {
            'zw' in dataSource[num] && dataSource[num].zw.length > 0 && <div className="information box-6">
            <div className="content">
              <i className="left-top"></i>
              <i className="left-bottom"></i>
              <i className="right-top"></i>
              <i className="right-bottom"></i>
              <div className="nei-box">
                <p className="title2"><i></i> <span>民生意见</span></p>
                <p className="neirong">{dataSource[num].zw.map(item => {return `${item} `})}</p>
              </div>
            </div>
          </div>
          }
        </div>
        <div className="friend-box">
          <div className="left-p">
            {dataSource[num].workMate[0] && <Pesoncard head={dataSource[num].workMate[0].icon} left={0} top={360} type={3} direct={1}>{`同事: ${dataSource[num].workMate[0].name}`}</Pesoncard>}
            {dataSource[num].workMate[1] && <Pesoncard head={dataSource[num].workMate[1].icon} right={200} top={580} type={3} direct={1}>{`同事: ${dataSource[num].workMate[1].name}`}</Pesoncard>}
            {dataSource[num].workMate[2] && <Pesoncard head={dataSource[num].workMate[2].icon} left={60} top={800} type={3} direct={1}>{`同事: ${dataSource[num].workMate[2].name}`}</Pesoncard>}
          </div>
          <div className="center-p">
            <div className="title" style={{marginBottom: 30}}>
              <Title>活动热图</Title>
            </div>
            <Frame height={760}>
              <bMap.Heat dataSource={dataSource[num].footprint}/>
            </Frame>
          </div>
          <div className="right-p">
            {dataSource[num].neighbors.slice(0, 2).map((d, i) => (
              <Pesoncard key={i} head={d.icon || "./images/timg.jpg"} left={i == 0 ? 300 : 100} top={i == 0 ? 300 : 480} type={1} direct={0}>{`邻居: ${d.name}`}</Pesoncard>
            ))}
            {dataSource[num].family.slice(0, 2).map((d, i) => (
              <Pesoncard key={i} head={d.icon || "./images/timg.jpg"} left={i == 0 ? 300 : 160} top={i == 0 ? 660 : 840} type={2} direct={0}>{`家人: ${d.name}`}</Pesoncard>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default User;
