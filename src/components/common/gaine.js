import React from 'react';
class Gaine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jinyun-gaine">
        <div className="jinyun-gaine-content">
          {this.props.children}
        </div>

      </div>
    )
  }
}

export default Gaine;
