import React from 'react';
import './index.scss';
import Slider from '../../components/slider';
// import Trotting from '../../components/trotting'; //js 定时器 走马灯
import Trotting from '../../components/trotting/trott';//纯css走马灯

class HistoryToday extends React.Component {
  render() {
    let {dataSource} = this.props;
    return (
      <div className="historytoday">
        <div className="itemBox">
          <Slider interval="15000" step="4" multi="4" horizon={false}>
            {dataSource && dataSource.map((item,i) => (
              <div key={i} className="list">
                <div className="date"><span>{item.year}</span></div>
                <div className="title">
                    <Trotting>{item.content.trim()}</Trotting>
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

export default HistoryToday;
