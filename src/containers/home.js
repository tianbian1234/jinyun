import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="home">
        <h2>津云大数据</h2>
        <div>
          <Link className="one" to="/one">场景1：舆情监测场景</Link>
          <Link className="one" to="/two">场景2：传播效果分析场景</Link>
          <Link className="one" to="/three">场景3：指挥调度场景</Link>
          <Link className="one" to="/four">场景4：中央厨房运行监控场景</Link>
          <Link className="one" to="/five">场景5：民生热点场景</Link>
          <Link className="one" to="/six">场景6：用户画像场景</Link>
          <Link className="one" to="/seven">场景7：事件分析场景</Link>
          <Link className="one" to="/nine">场景9：津云媒体矩阵数据分析场景</Link>
          <Link className="one" to="/ten">场景10：选题策划场景</Link>
          <Link className="one" to="/a1">场景A1：日常宣传管理状态（左）</Link>
          <Link className="one" to="/a2">场景A2：日常宣传管理状态（中）</Link>
          <Link className="one" to="/a3">场景A3：日常宣传管理状态（右）</Link>
          <Link className="one" to="/a2/test">场景A2: 中央厨房测试</Link>
        </div>
      </div>
    );
  }
}


export default Home;
