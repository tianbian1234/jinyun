import React from 'react';
import './countUp.js';

import './index.scss';


class Pop extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  render(){
    if (!this.props.dataPop) {
      return null;
    }

    return(<div className="box-wai-pop" style={this.props.style}>
        <div className={`pop-box pop-box-${this.props.num}`}>
            <div className={`pop-center pop-center-${this.props.num}`}></div>
            <div className={`pop-nei pop-nei-${this.props.num}`}></div>
            <span id="numUp" className="pop-content" style={{color:this.props.color}}>{this.props.dataPop.val}</span>
          </div>
        <p className="text-box">{this.props.dataPop.title}</p>
      </div>)

  }
}

export default Pop;
