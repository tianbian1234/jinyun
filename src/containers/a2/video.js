import React from 'react';
import Frame from 'components/frame';

class Video extends React.Component {
  constructor(props) {
    super(props)
  }
  renderVideoBox = (data) => {
    console.log(data);
    return data.map((item,i) => (
      <div key={i} style={{position:"relative",marginBottom:60,float:'left'}} className="video-box-nei">
        <p style={{position:"absolute",color: "#ffffff", textAlign:'center', fontSize: 50, width:'100%', margin:0, padding:0,top:30 }}>{item}</p>
        <div style={{width: 912, height: 515, marginTop:80,marginLeft:60}}>
          <Frame type={2}>
            <div style={{width: "100%", height: "100%", border: '1px solid #00d8ff', background: "#10305d", opacity:0.6 }}>

            </div>
          </Frame>
        </div>
      </div>
    ))
  };
  render() {
    return (
      <div className="video-box-wai">
        {this.renderVideoBox(this.props.titleC)}
      </div>
    )
  }
}

export default Video;
