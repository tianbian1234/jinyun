import React from 'react';
import Frame from 'components/frame';

import './index.scss';

class Arealist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNum:0
    }
  }
  setIntervalList(num) {
    let numNow = 0;
    this.IntervalArea = setInterval(() => {
      numNow++;
      if(numNow == num){
        numNow=0;
      }
      this.setState({
        showNum:numNow,
      });
    },10000)
  }
  componentDidMount() {
    let {dataSource} = this.props;
    const dataL = dataSource.length;
    if(dataL > 0){
      this.setIntervalList(dataL);
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource &&
    JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)){
      const dataL = nextProps.dataSource.length;
      if(this.IntervalArea){
        clearInterval(this.IntervalArea);
      }
      if(dataL > 0){
        this.setIntervalList(dataL);
      }
    }
  }
  componentWillUnmount() {
    if(this.IntervalArea){
      clearInterval(this.IntervalArea);
    }
  }
  render() {
    let {dataSource} = this.props;
    return (
      <div className="area-list">
        <div className="title">{this.props.title}</div>
        <div className="table-box">
          <Frame type={2}>
            <table className="list-content">
              <thead>
                <tr>
                  {dataSource.length > 0 && dataSource[this.state.showNum].map((item, i) => (<td key={i}>{item.Name}</td>)) }
                </tr>
              </thead>
              <tbody>
                <tr>
                  {dataSource.length > 0 && dataSource[this.state.showNum].map((item, i) => (<td key={i}>{item.Value}</td>)) }
                </tr>
              </tbody>
            </table>
          </Frame>
        </div>
      </div>
    )
  }
}

export default Arealist;
