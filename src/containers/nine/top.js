import React from 'react';
import Box from 'components/box';
import Frame from 'components/frame';

const data = [
  { number: 79, name: '政府'},
  { number: 35, name: '委办局'},
  { number: 23, name: '高校'},
  { number: 48, name: '其他'}
]
const leftConfig = {
  gov: '政府',
  ju: '委办局',
  college: '学校',
  others: '其他'
}
const rightConfig = {
  weiXinCount: '微信月收录',
  weiBoCount: '微博月收录',
}
class Top extends React.Component {
  constructor(props) {
    super(props)
  }
  renderCheckinLeft(data) {
    return Object.keys(leftConfig).map(key => (
      <Frame
        key={key}
        type={2}
        width={455}
        height={304}>
        <Box.Square>
          <div className="nine-panel-content">
            <span>{key in data ? data[key] : 0 }</span>
            <span>{leftConfig[key]}</span>
          </div>
        </Box.Square>
      </Frame>
    ))
  }
  renderCheckinRight(data) {
    return Object.keys(rightConfig).map((key,i) => (
      <Frame
        key={key}
        type={2}
        width={567}
        height={302}>
        <Box.Square>
          <div className="nine-panel-content">
            <span>
              {i == 0 ? <i className="icon-wechat"/> : <i className="icon-weibo"/>}
              {key in data ? data[key] : 0 }
            </span>
            <span>{ rightConfig[key]}</span>
          </div>
        </Box.Square>
      </Frame>
    ))
  }
  render() {
    let { dataSource } = this.props;
    return (
      <Frame height={973}>
        <div className="jinyun-nine-top">
          <div className="nine-panel">
            <div className="nine-panel-top">
              <div className="nine-panel-item"><Box.Circle>津云</Box.Circle></div>
              <div className="nine-panel-item nine-panel-number">
                <span>津云号入驻数</span>
                <span>
                  <a>{ 'accountCount' in dataSource ? dataSource.accountCount : 0 }</a>
                  个
                </span>
              </div>
            </div>
            <div className="nine-panel-bottom">
              { this.renderCheckinLeft(dataSource)}
            </div>
          </div>
          <div className="jinyun-nine-line"></div>
          <div className="nine-panel">
            <div className="nine-panel-top">
              <div className="nine-panel-item">
                <Box.Circle><i className="icon-pencil"/></Box.Circle>
              </div>
              <div className="nine-panel-item nine-panel-number">
                <span>津云号月最新发稿量</span>
                <span>
                  <a style={{color: '#0f97cb'}}>
                    { 'totalCount' in dataSource ? dataSource.totalCount : 0 }</a>
                  篇
                </span>
              </div>
            </div>
            <div className="nine-panel-bottom">
              { this.renderCheckinRight(dataSource) }
            </div>
          </div>
        </div>
      </Frame>
    )
  }
}
export default Top;
