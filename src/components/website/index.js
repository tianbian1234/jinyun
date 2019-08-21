import React from 'react';

import './index.scss';

class Website extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let {dataSource} = this.props;
    return(
      <div className="website">
        {
          dataSource && dataSource.length > 0 &&
            <div>
              <div className="titleBox">
                <div className="titleBox_left"><span>{dataSource[0].webName}</span></div>
                <div className="titleBox_right"><span>{dataSource[1].webName}</span></div>
              </div>
              <div className="websiteBox">
                <div className="websiteBox_left">
                  <img src={dataSource[0].webUrl} alt=""/>
                  {/* <iframe width="100%" height="100%" scrolling="auto" src={dataSource[0].webUrl}></iframe> */}
                </div>
                <div className="websiteBox_right">
                    <img src={dataSource[1].webUrl} alt=""/>
                  {/* <iframe width="100%" height="100%" scrolling="auto" src={dataSource[1].webUrl}></iframe> */}
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}

Website.PropTypes = {
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({
      webName: React.PropTypes.string,
      webUrl: React.PropTypes.string
    }))
}

export default Website;
