import React from 'react';

import Itemvs from './item_vs';

import './index.scss';

const title = ['官方媒体', '商业媒体', '网络媒体', '纸质媒体'];

class Vs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { dataSource } = this.props;
    let arr = Object.keys(dataSource);
    return (
      <div className="vs-box">
        <div className="title">{this.props.title}</div>
        <div className="neibu-box">
          {arr.length > 0 && arr.map((item,i) => (
            <div key={ i } className={`box box${i}`}>
              <Itemvs delayTick={i>1 ? 5:10} dataItem={dataSource[item]} dataTitle={title[i]} />
            </div>
          ))}
          <div className="back"></div>
          <div className="back1"></div>
        </div>
      </div>
    )
  }
}

Vs.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]).isRequired,
  dataSource: React.PropTypes.shape({
    title1: React.PropTypes.string,
    title2: React.PropTypes.string,
    content2: React.PropTypes.string,
    content1: React.PropTypes.string
  })
};

export default Vs;
