import React from 'react';
import { Center, Hoop, Cards, Border, Gaine } from 'components/common';
class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {dataSource, dataSource1, dataSource2} = this.props;
    return (
      <div className="four-bottom-container a2-right-container">
        <Border width={349} height={210}>
          <div className="four-bottom-title">
            <div className='four-bottom-title-t'>
              中央媒体
            </div>
            <div className='four-bottom-title-b'>
              <span>年取稿 {dataSource.count || 0 }</span>
            </div>
          </div>
          {/* <div className="four-bottom-content">
            { 'medias' in dataSource && dataSource.medias.map((item, i) => (<Gaine key={i}>{item.title}</Gaine>))}
          </div> */}

        </Border>
        <Border width={698} height={210}>
          <div className="four-bottom-title">
            <div className='four-bottom-title-t'>
              全国新闻网站
            </div>
            <div className='four-bottom-title-b'>
              <span>年取稿 {dataSource1.count || 0 }</span>
            </div>
          </div>
          {/* <div className="four-bottom-content">
            {
              'websites' in dataSource1 &&
              dataSource1.websites.slice(0, 21).map((item, i) => (
                <Gaine key={i}><img src={item.icon} alt={item.title}/></Gaine>))
            }
          </div> */}
        </Border>
        <Border width={349} height={210}>
          <div className="four-bottom-title">
            <div className='four-bottom-title-t'>
              都市协作体
            </div>
            <div className='four-bottom-title-b'>
              <span style={{display:'block'}}>年供稿{ dataSource2.addCount || 0}</span>
              <span style={{display:'block'}}> 年取稿{ dataSource2.getCount || 0}</span>
            </div>
          </div>
          {/* <div className="four-bottom-content">
            {
              'websites' in dataSource2
                &&
                dataSource2.websites.slice(0, 10).map((item, i) =>
                 (<Gaine key={i}><img src={item.icon} alt={item.title}/></Gaine>)
                )
            }
          </div> */}
        </Border>
      </div>
    )
  }
}

export default Bottom;
