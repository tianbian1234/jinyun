'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here,
  origin: {
    // 内部域
    interior: {
      domain: 'http://screen.tjyun.com',
      // domain: 'http://jinyun.datahunter.cn',
      code: 200,
      response: 'msg'
    },
   // 外部域
   external: {
     domain:'http://center.hub.tjyun.com',
     // domain: 'http://111.32.129.29:7070',
      code: 1,
      response: 'result'
    },
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
