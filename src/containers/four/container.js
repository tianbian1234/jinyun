import React from 'react';
import { Center, Hoop, Cards, Border, Gaine } from 'components/common';
// const test = [
//   { name: '天津日报', provide: 12311, fetch: 123123},
//   { name: '天津日报', provide: 12311, fetch: 123123},
//   { name: '天津日报', provide: 12311, fetch: 123123},
//   { name: '美国日报', provide: 12311, fetch: 123123},
//   { name: '美国日报', provide: 12311, fetch: 123123},
//   { name: '海外日报', provide: 12311, fetch: 123123},
// ]
// const test2 =
class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  renderLeftElement(data) {
    if (data && Array.isArray(data)) {
      const array = data.length > 3 ? data.slice(0, 3) : data;
      return array.map((item, idx) => {
        return (
          <Hoop
            key={`left-${idx}`}
            provide={item.provide}
            fetch={item.fetch}
            className={`mask-item left-back-${idx}`} >
            {item.name}
          </Hoop>
        )
      })
    }
    return null;
  }
  renderRightElement(data) {
    if (data && Array.isArray(data)) {
      const length = data.length >= 6 ? 6 : data.length;
      const array = length > 3 ? data.slice(3, length) : [];
      return array.map((item, idx) => {
        return (
          <Hoop
            key={`right-${idx}`}
            provide={item.provide}
            fetch={item.fetch}
            className={`mask-item right-back-${idx}`} >
            {item.name}
          </Hoop>
        )
      })
    }
    return null;
  }
  renderTopElement(data) {
    if (data && Array.isArray(data)) {
      const list = data.length > 3 ? data.slice(0, 3) : data;
      return list.map((item, idx) => {
        return (
          <Cards
            key={`top-${idx}`}
            title={item.name}
            bgType={idx === 1 ? 'b' : 'a'}>
            {item.value}
          </Cards>
        )
      })
    }
  }
  render() {
    return (
      <div className="four-container">
        <Center
          rotateElement={this.props.rotateElement}
          style={{marginTop: 230}}>
          中央厨房
        </Center>
        <div className="four-container-mask">
          <div className="mask-top">
            <div className="mask-box">
              {this.renderTopElement(this.props.topData)}
            </div>
          </div>
          <div className="mask-panel mask-left">
            {this.renderLeftElement(this.props.dataSource)}
          </div>
          <div className="mask-panel mask-right">
            { this.renderRightElement(this.props.dataSource)}
          </div>
        </div>
      </div>
    )
  }
}
Container.defaultProps = {
  rotateElement: [
    { name: '宣传量', value: 12312},
    { name: '宣传量', value: 12312},
    { name: '宣传量', value: 12312}
  ],
  topData: [
    { name: '津云号', value: '123123'},
    { name: '津云号', value: '123123'},
    { name: '津云号', value: '123123'}
  ],
  dataSource: [
    { name: '天津日报', provide: 12311, fetch: 123123},
    { name: '天津日报', provide: 12311, fetch: 123123},
    { name: '天津日报', provide: 12311, fetch: 123123},
    { name: '美国日报', provide: 12311, fetch: 123123},
    { name: '美国日报', provide: 12311, fetch: 123123},
    { name: '海外日报', provide: 12311, fetch: 123123},
  ]
}
export default Container
