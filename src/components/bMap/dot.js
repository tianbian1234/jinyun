export default function Dot(options){
  this.init(options);
}

const types = {
  'other': ['#3c9cff', '#b4dbf6'],
  '国土房管局': ['#2f0f98', '#bbb4f6'],
  '规划局': ['#02758a', '#72ede0'],
  '民政局': ['#85035f', '#db4bb4'],
  '南开区': ['#ffa13c', '#edd099'],
  '滨海新区': ['#1a8764', '#5df5af'],
  '东丽区': ['#023f8a', '#53b1d9'],
  '红桥区': ['#af44e6', '#db8fe6'],
  '武清区': ['#aa3815', '#fa864c'],
  '发改委': ['#ad4b4b', '#f8aeae'],
};

Dot.prototype.init = function(options) {
  this.x   = ~~(options.x);
  this.y   = ~~(options.y);
  this.size = ~~(options.size);
  this.type = options.type;
};

Dot.prototype.render = function(ctx, BW, BH) {
  var p = this;

  if(p.x < 0 || p.y <0 || p.x > BW || p.y > BH) {
    return;
  }

  ctx.beginPath();
  const color = types[p.type] || types['other'];
  var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
  gradient.addColorStop(0.5, color[0]);
  gradient.addColorStop(1, color[1]);
  ctx.fillStyle = gradient;
  ctx.arc(p.x, p.y, p.size, Math.PI*2, false);
  ctx.fill();
};
