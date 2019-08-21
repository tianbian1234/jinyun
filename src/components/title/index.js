import React from 'react';
import './index.scss';
class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="datahunter-title">
        <div className="title-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Title;
