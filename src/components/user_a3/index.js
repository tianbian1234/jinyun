import React from 'react';
import Frame from 'components/frame';
import Userbox from 'components/box_user';
import Pie from 'components/pie';

import './index.scss';
import './animation.scss';

class Usera extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataSource } = this.props;

    if (!dataSource) {
      return null;
    }

    return (
      <div className="big-box">
        <div className="title">{this.props.title}</div>
        <Frame>
          <div className="box">
            <div className="user-a">
              <div className="user-box">
                <div className="line">
                  <div className="back-dian"></div>
                  <div className="event-box">
                    { dataSource.tags.map((item,i) => (<p className={`tag tag-${i}`} key={i}>{item}</p>)) }
                  </div>
                  <div className="guang-nei"></div>
                  <div className="huan-nei"></div>
                  <div className="huan-wai"></div>
                  <div className={this.props.dataMan%2 == 0 ? "man" : "man1"}></div>
                  <p className="name">{dataSource.name}</p>
                </div>
              </div>
            </div>
            <div className="neibor">
              {dataSource.neighbors.length > 0 && (
                <div className="bor-1">
                  <img src={dataSource.neighbors[0].icon || "./images/timg.jpg"} alt="icon"/>
                  <p className="bor-1-name">
                    <span>邻居: </span>{dataSource.neighbors[0].name}
                  </p>
                </div>
              )}
              {dataSource.family.length > 0 && (
                <div className="bor-2">
                  <img src={dataSource.family[0].icon || "./images/timg.jpg"} alt="icon"/>
                  <p className="bor-2-name">
                    <span>家人: </span>{dataSource.family[0].name}
                  </p>
                </div>
              )}
              {dataSource.workMate.length > 0 && (
                <div className="bor-3">
                  <img src={dataSource.workMate[0].icon || "./images/timg.jpg"} alt="icon"/>
                  <p className="bor-3-name">
                    <span>同事: </span>{dataSource.workMate[0].name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Frame>
    </div>
    )
  }
}

export default Usera;
