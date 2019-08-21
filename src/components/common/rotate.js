import React from 'react';
const _style = {
  p: [
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(15deg)' },
  ],
  n: [
    { transform: 'rotate(10deg)' },
    { transform: 'rotate(-15deg)' }
  ],
}
class Rotate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = _style[this.props.type];
    const colorS = ["#ffcb88","#ffa9a9", "#cda1f1"];
    return (
      <div className="translation-box">
        <span style={style[0]}><span style={{whiteSpace:'nowrap',color: colorS[this.props.colorSet]}}>{this.props.label}</span></span>
        <span style={style[1]}><span style={{whiteSpace:'nowrap',color: colorS[this.props.colorSet]}}>{this.props.children}</span></span>
      </div>
    )
  }
}
Rotate.defaultProps = {
  type: 'p',
}
Rotate.propTypes = {
  type: React.PropTypes.oneOf(['p', 'n'])
}
export default Rotate;
