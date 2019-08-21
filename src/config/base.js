'use strict';

const parameter = {
  // 头条新闻配置
  toutiao: {
    table: 't_news',
    field: [
      { o: 'title' },
      { o: 'url' },
      { o: 'orign'}
    ],
    where: [
      { o: 'type', v: 1, on: '=' },
      { o: 'area', v: '天津', on: '!=' }
    ]
  },
  // 微博热点新闻
  weibo: {
    table: 't_news',
    field: [
      { o: 'title' },
      { o: 'nick' },
      { o: 'url' },
      { o: 'icon' },
      { o: 'dt', order: 'desc' }
    ],
    where: [
      { o: 'type', v: 2, on: '=' }
    ]
  },
  // 微信热点新闻
  wechat: {
    table: 't_news',
    field: [
      { o: 'title' },
      { o: 'nick' },
      { o: 'url' },
      { o: 'dt', order: 'desc' }
    ],
    where: [
      { o: 'type', v: 3, on: '=' }
    ]
  },
  //国内媒体
  meiti: {
    table: 't_news',
    field: [
      { o: 'area' },
      { o: 'title' },
      { o: 'orign' },
      { o: 'url' },
      { o: 'bb' },
      { o: 'dt', order: 'desc' }
    ],
    where: [
      { o: 'type', v: 4, on: '=' },
      { o: 'area', v: '天津', on: '!=' }
    ]
  },
  word: {
    table: 't_word',
    field: [
      { o: 'k' },
      { o: 'v' }
    ],
    where: [
      { o: 'type', v: 1, on: '='}
    ]
  },
  all_word: {
    table: 't_word',
    field: [
      { o: 'k' },
      { o: 'v' }
    ],
    where: [
      { o: 'type', v: 5, on: '='}
    ]
  },
  // 焦点事件
  spot: {
    table: 't_news',
    field: [
      { o: 'title' },
      { o: 'url' },
      { o: 'dt', order: 'asc' },
    ],
    where: [
      { o: 'type', v: 5, on: '='}
    ]
  },
  // 舆情中间那三个圈
  feel: {
    table: 't_feel',
    field: [
      { o: 'face' },
      { o: 'negtive' },
      { o: 'neuter'},
    ],
    where: [
      { o: 'type', v: 5, on: '='}
    ]
  },
  //稿件传播力
  spreadStory: {
    table: 't_trans',
    field: [
      { o: 'name' },
      { o: 'org'},
      { o: 'pubNum',order: 'desc'}
    ],
    where: [
      { o:'type', v: 3, on:' = '}
    ]
  },
  //稿件作者
  spreadAuthor: {
    table: 't_trans',
    field: [
      { o: 'name'},
      { o: 'org'},
      { o: 'pubNum',order: 'desc'}
    ],
    where: [
      { o:'type', v: 1, on:' = '}
    ]
  },
  //稿件微信
  spreadWechat: {
    table: 't_trans',
    field: [
      { o: 'name' },
      { o: 'pubNum',order: 'desc'}
    ],
    where: [
      { o:'type', v: 2, on:' = '}
    ]
  }
}
function formate(oldObject) {
  const newObject = {};
  Object.keys(oldObject).forEach((key) => {
    let item = oldObject[key];
    let current = {};
    Object.keys(item).forEach(props => {
      current[props] = typeof item[props] === "string" ? item[props] : JSON.stringify(item[props]);
    });
    newObject[key] = current;
  })
  return newObject;
}
export default {
  resfulApi: formate(parameter)
}
