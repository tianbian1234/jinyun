import React from 'react'
class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      containerWidth: 0,
      afterWidth: 0,
      contentWidth: 0
    };
  }
  componentDidMount() {
    const containerWidth = this.refs.container.clientWidth;
    const afterWidth = this.refs.after.clientWidth;
    const contentWidth = this.refs.content.clientWidth;
    this.setState({
      containerWidth,
      afterWidth,
      contentWidth,
    });
  }
  render() {
    const width = this.state.containerWidth - this.state.afterWidth;
    return (
      <li className="datahunter-list-item1" ref="container">
        <div className="item-content" style={{ width}}>
          <span className={width > this.state.contentWidth ? null : 'marquee'} ref="content">
            {this.props.daPingUrl ? (<a href={this.props.daPingUrl} target="_blank">{this.props.children}</a>) : this.props.children}</span>
        </div>
        <div className="fixed" ref="after">{this.props.afterLabel}</div>
      </li>
    )
  }
}
Item.defaultProps = {
  totalWidth: 1363
};

Item.propTypes = {
  children: React.PropTypes.string,
  afterLabel: React.PropTypes.string
};

export default Item
