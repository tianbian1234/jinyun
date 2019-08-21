import React from 'react';
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jinyun-containers">
        {this.props.children}
      </div>
    )
  }
}
export default Layout;
