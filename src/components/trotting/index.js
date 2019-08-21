import React from 'react';

class Trotting extends React.Component {
  constructor (){
    super()
    this.state = {
      moveDistance:0
    }
  }
  componentDidMount() {
    const spanWidth = this.refs.spans.clientWidth
    if (this.props.totalWidth < spanWidth ) {
      this.staticInterval(spanWidth);
    }
  }
  staticInterval(width) {
    this.interval = setInterval(() => {
      const moveDistance =  Math.abs(this.state.moveDistance - 1);
      this.setState({
        moveDistance: moveDistance > width ? 0 : -moveDistance
      })
    }, this.props.speed)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render (){
    return (
      <div style={{height:this.props.height,position:'relative',overflow:'hidden'}}>
        <span ref="spans" style={{position: "absolute",left:this.state.moveDistance}}>{this.props.children}</span>
      </div>
    )
  }
}
Trotting.defaultProps = {
  totalWidth: 1363,//走马灯要求的宽度（超过该值会有走马灯效果）
  speed:36,        //速度
  height:'70px',   //高度
};
Trotting.propTypes = {
  children: React.PropTypes.string,
  speed: React.PropTypes.number
};

export default Trotting;
