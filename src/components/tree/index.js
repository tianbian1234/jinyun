import React from 'react';
import echarts from 'echarts';
import Frame from '../../components/frame';
import Title from '../../components/title';

import './index.scss';

const series = {
  name:'',
  type:'treemap',
  width: '100%',
  height: '100%',
  visibleMin: 300,
  label: {
    show: true,
    formatter: "{b}",
    normal: {
      textStyle: {
        ellipsis: true,
        fontSize:36
      }
    }
  },
  color: [
    'rgba(0, 186, 255, 0.3)',
    'rgba(0, 186, 255, 0.4)',
    'rgba(0, 186, 255, 0.5)',
    'rgba(0, 186, 255, 0.6)',
    'rgba(0, 186, 255, 0.7)',
    'rgba(0, 186, 255, 0.8)',
    ],
  colorMappingBy: 'value',
  colorAlpha: [0.2, 1],
  itemStyle: {
    normal: {
      gapWidth: 1,
      borderColor: 'transparent',
      }
    },
  roam:false,
  breadcrumb: {
    show: false
    },
  data: []
};

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  drawTree(props) {
    const { dataSource } = props;
    series.data = dataSource;

    const option = {
      tooltip: {
        formatter: function (info) {
          return info.name + '：' + info.value
        }
      },
      series: [
        series
      ]
    };

    this.myChart.setOption(option)
  }

  componentDidMount() {
    this.myChart = echarts.init(this.refs.tree);
    this.drawTree(this.props);
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  componentWillUnmount() {
    this.myChart = null;
  }

  render() {
    const { width, height, title } = this.props;

    return (
      <div className="tree-box" style={{width, height}}>
        <div className="tree-title">
          <Title>{title}</Title>
        </div>
        <div className="tree-content">
          <Frame padding={50}>
            <div className="tree" ref="tree"> </div>
          </Frame>
        </div>
      </div>
    )
  }
}

Tree.defaultProps = {
  width: '100%',
  height: '100%',
  title: '未命名树图',
  dataSource: [
    {
      children: [
        {
          name: "华为",
          value: 0.18
        },
        {
          "name": "苹果",
          "value": 0.23
        },
        {
          "name": "三星",
          "value": 0.27
        },
        {
          "name": "小米",
          "value": 0.32
        }
      ]
    }
  ]
};

export default Tree;
