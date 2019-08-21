import React from 'react';
import echarts from 'echarts';
import 'echarts-wordcloud';
import './index.scss';

class Word2 extends React.Component {
  constructor(props) {
    super(props);
  }
  drawWord(dataSource) {
    this.myChart = echarts.init(this.refs.word2d);
    const colorList = ['#f8aeae','#bbb4f6','#72ede0','#db4bb4','#edd099','#5df5af','#53b1d9','#db8fe6','#fa864c','#b4dbf6'];
    let option = {
      toolbox: {
        feature: {
          saveAsImage: {
            show:false,
            iconStyle: {
              normal: {
                color: '#FFFFFF'
              }
            }
          }
        }
      },
      series: [{
        name: '热点分析',
        type: 'wordCloud',
        size: ['30%', '99%'],
        sizeRange: [this.props.big-55, this.props.big],
        //textRotation: [0, 45, 90, -45],
        rotationRange: [0, 0],
        rotationStep:90,
        //shape: 'circle',
        textPadding: 0,
        autoSize: {
          enable: true,
          minSize: 6
        },
        textStyle: {
          normal: {
            color: function() {
              let num = Math.ceil(Math.random()*9);
              return colorList[num];
            },
            fontSize: Math.round(Math.random() * 80),
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [{
          name: "Jayfee",
          value: 666
        }, {
          name: "Nancy",
          value: 520
        }]
      }]
    };

    option.series[0].data = dataSource;
    console.log("111111111",option.series[0].data);

    this.myChart.setOption(option);
  }
  componentDidMount() {
    this.props.dataSource.length > 0 && this.drawWord(this.props.dataSource);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.dataSource && JSON.stringify(this.props.dataSource)
      !== JSON.stringify(nextProps.dataSource)) {
      nextProps.dataSource.length > 0 &&  this.drawWord(nextProps.dataSource);
    }
  }
  render() {
    return (
      <div style={{width:this.props.width,height:this.props.height}} className="word-2d-box">
        <div className="title">{this.props.title}</div>
        <div style={{width: this.props.widthD,height: this.props.heightD,left:this.props.left}} className="word-2d" ref="word2d"></div>
      </div>
    )
  }
}

export default Word2;
