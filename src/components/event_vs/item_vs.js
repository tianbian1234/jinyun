import React from 'react';

import Frame from 'components/frame';
import { Square } from 'components/box';

import './index.scss';

class Itemvs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowNum:0
    }
  }
  setInterCompare(data) {
    let num = data.length;
    let numPlus = 0;
    this.compareInterVal = setInterval(() => {
      this.setState({
        nowNum: numPlus
      });
      numPlus++;
      if(numPlus >= num)
      {
        numPlus=0;
      }
    },this.props.delayTick*1000)
  }
  componentDidMount() {
    this.props.dataItem.length > 0 && this.setInterCompare(this.props.dataItem);
  }
  componentWillUnmount() {
    clearInterval(this.compareInterVal);
  }
  render(){
    let {dataItem, dataTitle} = this.props;
    return (
      <Frame type={2}>
        <Square>
          <p className="name">{dataTitle}</p>
          <p className="name-2">{dataItem.length> 0 && dataItem[this.state.nowNum].title}</p>
          <p className="content">{dataItem.length> 0 && dataItem[this.state.nowNum].content}</p>
        </Square>
      </Frame>
    )
  }
}

export default Itemvs;
