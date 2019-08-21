import React from 'react';
import './index.scss';
 class Trott extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       boxWidth:0,
       contentWidth: 0
     };
   }
   componentDidMount() {
     const boxWidth = this.refs.box.clientWidth;
     const contentWidth = this.refs.content.clientWidth;
     this.setState({boxWidth, contentWidth});
   }
  render() {
    return (
      <div ref="box" className={this.state.contentWidth < this.state.boxWidth ? " ":"marquee"}  style={{width:this.props.width,height:this.props.height}}>
        <div ref="content">
           <span>{this.props.children}</span>
        </div>
      </div>
    )
  }
}

Trott.defaultProps = {
  height:'70px',
  width:'1360px',
}
export default Trott;
