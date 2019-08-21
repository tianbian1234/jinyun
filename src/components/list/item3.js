import React from 'react'
class Item3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moveDistance: 0
    };
    // this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  componentDidMount() {
    // const contentWidth = this.refs.content.clientWidth;
    // const spanWidth = this.refs.spans.clientWidth;
    // if (this.props.totalWidth - spanWidth <=  contentWidth ) {
    //   this.staticInterval(contentWidth);
    // }
  }
  staticInterval(width) {
    // this.interval = setInterval(() => {
    //   const moveDistance =  Math.abs(this.state.moveDistance - 1);
    //   this.setState({
    //     moveDistance: moveDistance > width ? 0 : -moveDistance
    //   })
    // }, 36)
  }
  // handleMouseOver() {
  //   clearInterval(this.interval);
  // }
  // handleMouseLeave() {
  //   const contentWidth = this.refs.content.clientWidth;
  //   const spanWidth = this.refs.spans.clientWidth;
  //   if (this.props.totalWidth - spanWidth <=  contentWidth ) {
  //     this.staticInterval(contentWidth);
  //   }
  // }
  componentWillUnmount() {
    // clearInterval(this.interval);
  }
  render() {
    return (
      <li className="datahunter-list-item1">
        { this.props.ranking ? (<span style={{marginLeft: 26}}>{this.props.ranking}</span>) : null}
        <span style={this.props.ranking ? {marginLeft: 70,width:900,display:'inline-block', overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',verticalAlign:'middle'} : {marginLeft:30,width:1000,display:'inline-block', overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',verticalAlign:'middle'}}>{this.props.children}</span>
        {this.props.org && <span style={{position:'absolute',left:950,width:200,overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',verticalAlign:'middle'}}>{this.props.org}</span>}
        <span className="fixed" ref="spans">{this.props.afterLabel}</span>
      </li>
    )
  }
}
Item3.defaultProps = {
  totalWidth: 1363
};

Item3.propTypes = {
  children: React.PropTypes.string,
  afterLabel: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

export default Item3
