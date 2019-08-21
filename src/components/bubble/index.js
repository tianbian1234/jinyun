import React from 'react'
import * as d3 from 'd3';
import './index.scss';

class Bubble extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        nodes:[]
      }
    }
    drawBubble(dataSource){
      let {width,height} = this.props;
      let root = d3.hierarchy({children: dataSource});
      let bubble = d3.pack().size([width, height]);
      let nodes = bubble(root.sum(function(d) {return d.value || 0; })).descendants();
      nodes = nodes.filter(function(d){ return !d.children; });
      this.setState({
        nodes:nodes
      });
    }
    componentDidMount(){
        this.props.dataSource.length>0 && this.drawBubble(this.props.dataSource);
    }
    componentWillReceiveProps(nextProps){
      if (nextProps.dataSource && JSON.stringify(this.props.dataSource)
        !== JSON.stringify(nextProps.dataSource)) {
        this.drawBubble(nextProps.dataSource);
      }
    }
    render(){
      let {dataSource} = this.props;
      let {nodes} = this.state;
      return(<div style={this.props.style} className="bubble-box">
        <div className="title">{this.props.title}</div>
        <div style={{width:this.props.boxWidth,height:this.props.boxHeight,marginLeft:this.props.leftZ}} className="main" ref="bubble">
        {(nodes.length>0) && dataSource && dataSource.map((item,i)=>(
          <div
            key={i} style={{transform:`translate(${parseInt(nodes[i].x-110)}px,${parseInt(nodes[i].y-110)}px) scale(${nodes[i].r/110})`}}
            className="bubbleS">
            <span style={{fontSize:40,color:"#ffffff",width:180,display:'inline-block',lineHeight:'50px',verticalAlign:'middle'}}>{item.key}</span>
          </div>))
        }
        </div>
      </div>)
    }
}

Bubble.defaultProps={
    boxHeight: 1020,
    boxWidth: 1020
};
Bubble.propTypes = {
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ])
  })),
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

export default Bubble;
