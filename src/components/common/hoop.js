import React from 'react';

class Hoop extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={this.props.style} className={this.props.className ? `four-hoop ${this.props.className}` : 'four-hoop'}>
        <div className="four-hoop-box">
          <div className="hoop-font"/>
          <div className="hoop-content">
            <span>{this.props.children}</span>
            <span style={{display:'block',whiteSpace:'nowrap'}}>月供稿: {this.props.provide}</span>
            <span style={{display:'block',whiteSpace:'nowrap'}}>月取稿:{ this.props.fetch}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Hoop;
