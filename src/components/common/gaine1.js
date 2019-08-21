import React from 'react';
class Gaine1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jinyun-gaine1">
        <div className="jinyun-gaine1-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Gaine1;
