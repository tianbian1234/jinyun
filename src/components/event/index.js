import React from 'react';

import Frame from 'components/frame';

import './index.scss';


class Event extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let{ dataSource }= this.props;
    return (
      <div className="event-box">
        <div className="event-name">{dataSource && dataSource.title}</div>
        <Frame>
          <div className="inter">
            <p className="back">简介</p>
          </div>
          <div className="content"></div>
          <div className="wenzi" dangerouslySetInnerHTML={{__html: `${dataSource && dataSource.abstract}`}} />
          <img className="img" src={dataSource && dataSource.guideImage} alt=""/>
        </Frame>
      </div>
    )
  }
}

Event.propTypes = {
  dataSource: React.PropTypes.shape({
    title: React.PropTypes.string,
    abstract: React.PropTypes.string,
    guideImage: React.PropTypes.string
  })
};

export default Event;
