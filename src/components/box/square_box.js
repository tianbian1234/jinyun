import React from 'react';
class SquareBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="datahunter-box-square">
        <div className="datahunter-box-square-bg"/>
        <div className="datahunter-box-square-container">{this.props.children}</div>   
      </div>
    )
  }
}

export default SquareBox;
