import React from 'react';
import Progress from 'components/progress';
import Slider from 'components/slider';
import Heartbeat from 'components/heartbeat';
import Title from 'components/title';
import Mapnew from 'components/map_new';
import Gun from 'components/slider/gun';
import { Center, Hoop, Cards, Rotate } from 'components/common';
import Hotword from 'components/hot_words/index2';
const toutiaoData = [
  {content: '天津人力社保只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。', label: '今日头条' },
  {content: '天津人力社保', label: '今日头条' },
  {content: '天津人保', label: '今日头条' },
  {content: '天津人力社保', label: '今日头条' },
  {content: '天津人力社保', label: '今日头条' },
  {content: '天津人力社保', label: '今日头条' },
]
const test2 = [{"title":"中国中铁副总工王梦恕：高铁安WIFI技术尚未成熟","url":"http://bbs.ahsz.gov.cn/archiver/?tid-193245.html","dt":1488881110000},{"title":"女性职场现状调查：超八成女性认为就业中存性别歧视","url":"http://bbs.ahsz.gov.cn/archiver/?tid-193242.html","dt":1488881039000},{"title":"钟南山称医改要加上医德教育 看过度医疗会寒心","url":"http://bbs.ahsz.gov.cn/archiver/?tid-193239.html","dt":1488880970000},{"title":"华夏基金管理有限公司关于旗下部分开放式基金新增北京君德汇富投资咨询有限公司为代销机构的公告","url":"http://caifu.cnstock.com/info_publish/detail/fund/702055","dt":1488876066000},{"title":"补精神之钙  铸党性之魂（全面从严治党）","url":"http://lianghui.people.com.cn/2017/n1/2017/0307/c410899-29127578.html","dt":1488864720000},{"title":"代表委员热议政府工作报告（代表委员议国是）","url":"http://lianghui.people.com.cn/2017/n1/2017/0307/c410899-29127548.html","dt":1488864600000},{"title":"今年去产能酿新政谋变局","url":"http://dz.jjckb.cn/www/pages/webpage2009/html/2017-03/07/content_29273.htm","dt":1488844800000},{"title":"15次会议研究26项重大议题","url":"http://paper.people.com.cn/rmrbhwb/html/2017-03/07/content_1755449.htm","dt":1488844800000},{"title":"北京一业主卖房现场决定离婚提价\r\n变身“唯一房”坐涨60万元","url":"http://zqrb.ccstock.cn/html/2017-03/07/content_259753.htm","dt":1488844800000},{"title":"前两月50城土地收入同比上涨超七成","url":"http://dz.jjckb.cn/www/pages/webpage2009/html/2017-03/07/content_29291.htm","dt":1488844800000},{"title":"有利无害，我赞同法定婚龄改为18岁","url":"http://epaper.bjnews.com.cn/html/2017-03/07/content_673537.htm","dt":1488844800000},{"title":"6.5%，这个目标很实在（热点聚焦）","url":"http://paper.people.com.cn/rmrbhwb/html/2017-03/07/content_1755408.htm","dt":1488844800000},{"title":"外地残疾人无锡免费乘公交被拒","url":"http://epaper.bjnews.com.cn/html/2017-03/07/content_673523.htm","dt":1488844800000},{"title":"野生动物入药得兼顾“人道”与“兽道”","url":"http://digitalpaper.stdaily.com/http_www.kjrb.com/kjrb/html/2017-03/07/content_364006.htm","dt":1488844800000},{"title":"努力开创强军兴军事业新局面\r\n以优异成绩迎接党的十九大胜利召开","url":"http://epaper.gmw.cn/gmrb/html/2017-03/07/nw.D110000gmrb_20170307_5-02.htm","dt":1488844800000},{"title":"10月告别漫游费 运营商“早有准备”","url":"http://epaper.bjnews.com.cn/html/2017-03/07/content_673481.htm","dt":1488844800000},{"title":"陕西酱香猪耳检出瘦肉精","url":"http://epaper.bjnews.com.cn/html/2017-03/07/content_673496.htm","dt":1488844800000},{"title":"“我也来说说”“我要抢个麦”","url":"http://203.192.15.131/content/20170307/Articel09005BB.htm","dt":1488844800000},{"title":"台湾人为啥酷爱存钱","url":"http://paper.people.com.cn/rmrbhwb/html/2017-03/07/content_1755420.htm","dt":1488844800000},{"title":"白岩松 新闻发言人最大的错误是沉默","url":"http://epaper.bjnews.com.cn/html/2017-03/07/content_673544.htm","dt":1488844800000},{"title":"日清登上质检总局“黑榜”","url":"http://epaper.bjnews.com.cn/html/2017-03/07/content_673493.htm","dt":1488844800000}]
const test3 = [{title:'京津冀交通一体化加快公交发展"一卡通"12城互联互通',time:"2017年2月7日",data:[
  [{name:'天津'}, {name:'天津',value:95}],
  [{name:'天津'}, {name:'广州',value:90}],
  [{name:'天津'}, {name:'大连',value:80}],
  [{name:'天津'}, {name:'南宁',value:70}],
  [{name:'天津'}, {name:'南昌',value:60}],
  [{name:'天津'}, {name:'拉萨',value:50}],
  [{name:'天津'}, {name:'长春',value:40}],
  [{name:'天津'}, {name:'包头',value:30}],
  [{name:'天津'}, {name:'重庆',value:20}],
  [{name:'天津'}, {name:'常州',value:10}]
]},{title:'天津大屏事件分析综合改善，数据完美对接',time:"2017年2月7日",data:[
  [{name:'天津'}, {name:'天津',value:95}],
  [{name:'天津'}, {name:'乌鲁木齐',value:90}],
  [{name:'天津'}, {name:'昆明',value:80}],
  [{name:'天津'}, {name:'哈尔滨',value:70}]
]}];
const test5 = [
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},
  {key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},{key:"时政", value:30},
  {key:"时政", value:20},
  {key:"时政", value:15},
  {key:"建雄", value:10},
  {key:"人民", value:8},


];
import Bg from 'components/arrow/bg';
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div className="home container-bg">
        <h2>测试开发</h2>

        <p style={{fontSize: '60px', color: '#fff'}}>
          宽: <span>{document.documentElement.clientWidth}</span> <br/>
          高: <span>{document.documentElement.clientHeight}</span>
        </p>

        <Slider width={300} height={300} multi={3} next={true} prev={true} loop={true} horizon={false}>
          <div style={{background: 'red'}}>111</div>
          <div style={{background: 'yellow'}}>222</div>
          <div style={{background: 'lightblue'}}>333</div>
          <div style={{background: 'gray'}}>444</div>
        </Slider>


        <div style={{width: 1362, marginLeft: 40}}>
          <Center rotateElement={[
            { name: '宣传量', value: 12312},
            { name: '宣传量', value: 12312},
            { name: '宣传量', value: 12312}
          ]}/>
          <Hoop />
          <Rotate />
          {/* <List1
            style={{ marginBottom: 40}}

            dataSource={toutiaoData}
            scrolled
          /> */}
        </div>
{/*
        <div style={{width: 900, height: 600, position: 'relative'}}>
          <Tree title="设备终端占比分析" />
        </div> */}

        <Mapnew
          title={(<Title style={{width: 540, backgroundSize: '480px 82px',fontSize:44,fontWeight:'bold'}}>单篇稿件传播路径</Title>)}
          style={{width:1200,height:862,position:"absolute"}}
          mapWidth={1200}
          mapHeight={862}
          mapLeft={65}
          backShow={false}
          mapTop={530}
          mapZoom={1.12}
          dataSource={test3}
        />

        <Hotword
          radius={190}
          widthK={960}
          heightK={760}
          title={(<Title>全国热点词</Title>)}
          dataSource={test5}
        />

      </div>
    );
  }
}


export default Text;
