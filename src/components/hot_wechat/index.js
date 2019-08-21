import React from 'react';
import './index.scss';
import Slider from '../../components/slider';
import Trotting from '../../components/trotting/trott';//纯css走马灯

class Hotwecht extends React.Component {
  render() {
    let {dataSource} = this.props;
    return (
      <div className="hotwebchat">
        <div className="itemBox">
          <Slider step="4" multi="4" horizon={false}>
            {dataSource && dataSource.map((item,i) => (
              <div key={i} className="list">
                <div className="title"><Trotting height="60px">{item.title}</Trotting></div>
                <div className="info">
                  <div className="author"><span>作者：</span><span>{item.author}</span></div>
                  <div className="depement"><span>使用部门</span><span>:{item.department}</span></div>
                  <div className="num"><span>次数：</span><span>{item.count}</span></div>
                </div>
              </div>
            ))
            }
          </Slider>
        </div>
      </div>
    )
  }
}

export default Hotwecht;
