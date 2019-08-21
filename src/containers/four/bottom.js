import React from 'react';
import { Center, Hoop, Cards, Border, Gaine, Gaine1} from 'components/common';
class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topN: 0,
      topD:0
    }
  }
  moveLogo(data) {
    let logoNum=0;
    let num = Math.ceil(data.length/28);
    this.bottomInterval = setInterval(() => {
      logoNum++;
      this.setState({
        topN: this.state.topN += -400
      });
      if(logoNum >= num-1)
      {
        logoNum = -1;
        this.setState({
          topN: 0
        });
      }
    }, 2000);
  }
  moveDushi(data) {
    let logoNum1=0;
    let top1 = 0;
    let num1 = Math.ceil(data.length/14);
    this.bottomInterval1 = setInterval(() => {
      logoNum1++;
      top1 = logoNum1 * -320;
      if(logoNum1 >= num1)
      {
        logoNum1 = 0;
        top1 = 0;
      }
      console.log(logoNum1);
      this.setState({
        topD: top1
      });
    }, 2000);
  }
  componentDidMount() {
    if(this.props.dataSource1 && "websites" in this.props.dataSource1) {
      this.props.dataSource1.websites.length > 21 && this.moveLogo(this.props.dataSource1.websites);
    }
    if(this.props.dataSource2 && "websites" in this.props.dataSource2) {
      this.props.dataSource2.websites.length > 14 && this.moveDushi(this.props.dataSource2.websites);
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource1 && "websites" in nextProps.dataSource1
      && JSON.stringify(nextProps.dataSource1.websites) !== JSON.stringify(this.props.dataSource1.websites)){
      if(this.bottomInterval){
        clearInterval(this.bottomInterval);
      }
      nextProps.dataSource1.websites.length > 21 && this.moveLogo(nextProps.dataSource1.websites);
    }
    if(nextProps.dataSource2 && "websites" in nextProps.dataSource2
      && JSON.stringify(nextProps.dataSource2.websites) !== JSON.stringify(this.props.dataSource2.websites)){
      if(this.bottomInterval1){
        clearInterval(this.bottomInterval1);
      }
      nextProps.dataSource2.websites.length > 14 && this.moveDushi(nextProps.dataSource2.websites);
    }
  }
  componentWillUnmount() {
    if(this.bottomInterval){
      clearInterval(this.bottomInterval);
    }
    if(this.bottomInterval1){
      clearInterval(this.bottomInterval1);
    }
  }
  render() {
    let {dataSource, dataSource1, dataSource2} = this.props;
    return (
      <div className="four-bottom-container">
        <Border width={1036}>
          <div className="four-bottom-title">
            <div className='four-bottom-title-t'>
              中央媒体
            </div>
            <div className='four-bottom-title-b'>
              <span>年取稿 {dataSource.count || 0 }</span>
            </div>
          </div>
          <div className="center-content">
            <div className="four-bottom-content">
              { 'medias' in dataSource && dataSource.medias.map((item, i) => (<Gaine key={i}>{item.title}</Gaine>))}
            </div>
          </div>
        </Border>
        <Border width={1764} >
          <div className="four-bottom-title bottom-title-center">
            <div className='four-bottom-title-t'>
              全国新闻网站
            </div>
            <div className='four-bottom-title-b'>
              <span>年取稿{ dataSource1.count || 0 }</span>
            </div>
          </div>
          <div className="four-logo-content">
            <div ref={`${'websites' in dataSource1 && (dataSource1.websites.length > 21)? 'four-bottom-content-gun' : ''}`}
                 className={`four-bottom-content`}
                 style={{top:this.state.topN}}
            >
              {
                'websites' in dataSource1 &&
                dataSource1.websites.map((item, i) => (
                  <Gaine key={i}><img src={item.icon} alt={item.title}/></Gaine>))
              }
            </div>
          </div>
        </Border>
        <Border width={1036}>
          <div className="four-bottom-title">
            <div className='four-bottom-title-t'>
              都市协作体
            </div>
            <div className='four-bottom-title-b'>
              <span>年供稿{ dataSource2.addCount || 0}</span>
              <span> 年取稿{ dataSource2.getCount || 0}</span>
            </div>
          </div>
          <div className="city-logo">
            <div
              className="four-bottom-content"
              style={{top:this.state.topD}}
            >
              {
                'websites' in dataSource2
                  &&
                  dataSource2.websites.map((item, i) =>
                   (<Gaine1 key={i}><img src={item.icon} alt={item.title}/></Gaine1>)
                  )
              }
            </div>
          </div>
        </Border>
      </div>
    )
  }
}

export default Bottom;
