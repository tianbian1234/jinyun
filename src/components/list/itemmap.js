
import React from 'react';

class Itemmap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="datahunter-list-item1">
        <div>
          <span className="source">{this.props.source}</span>
          <span className="newTitle">{this.props.title}</span>
          <span className="fixed" ref="spans">{this.props.dt}</span>
        </div>
      </li>
    )
  }
}
Itemmap.propTypes = {
  source: React.PropTypes.string,
  title: React.PropTypes.string,
  dt: React.PropTypes.string,
}
export default Itemmap;
