import React from 'react';
import './cards.scss';
const data = [
  { content: "京津冀交通一体化加快发展公交“一卡通”12城互联互通", date: '2017年10月21日'},
  { content: "天津房地产降价，降价比例5%", date: '2018年10月21日'}
];
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  componentDidMount() {
    this.props.dataSource.length > 0 && this.staticInterval(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource)){
      clearInterval(this.cardsInterval);
      nextProps.dataSource.length > 0 && this.staticInterval(nextProps.dataSource);
    }
  }
  staticInterval(data) {
    this.cardsInterval = setInterval(()  => {
      const index = this.state.index + 1;
      this.setState({
        index: index === data.length ? 0 : index
      })

    }, 5000);
  }
  renderOrg(org) {
    if (org) {
      return (<p style={{marginTop:5,marginBottom:5}}>{org}</p>)
    }
    return null;
  }
  renderContent(content) {
    if (content) {
      return (<p className="content-p">{content}</p>)
    }
    return null;
  }
  renderAfterElement(date) {
    if (date) {
      return (<span className="content-ps">{date}</span>)
    }
    return null
  }
  componentWillUnmount() {
    clearInterval(this.cardsInterval);
  }
  render() {
    let bgStyle = null;
    if (this.props.bgImage) {
      bgStyle = {
        backgroundImage: `url(${this.props.bgImage})`
      }
    }
    const dataSource = this.props.dataSource.length>0 && this.props.dataSource[this.state.index];
    return (
      <div className={this.props.bsClass ? `${this.props.bsClass} datahunter-cards` : 'datahunter-cards'}>
        <div className="datahunter-cards-box" style={bgStyle}>
          <div className="cards-box-content">
            { this.renderOrg(dataSource.org)}
            { this.renderContent(dataSource.content)}
            { this.renderAfterElement(dataSource.date) }
          </div>

        </div>
      </div>
    );
  }
}
Cards.defaultProps = {
  children: '京津冀交通一体化加快发展公交“一卡通”12城互联互通',
  afterContent: '2017年10月21日'
}
Cards.propsTypes = {
  bsClass: React.PropTypes.string,
  afterContent: React.PropTypes.string,
  bgImage: React.PropTypes.string
}
export default Cards;
