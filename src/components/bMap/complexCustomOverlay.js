import Dot from './dot';

export default function ComplexCustomOverlay(point, data){
  this._point = point;
  this._data = data;
}

ComplexCustomOverlay.prototype = new BMap.Overlay();

ComplexCustomOverlay.prototype.initialize = function(map){
  this._map = map;
  this.canvas = document.createElement("canvas");
  this.canvas.style.cssText = "position:absolute;left:0;top:0;";
  this.ctx = this.canvas.getContext("2d");
  let size = map.getSize();
  this.canvas.width = size.width;
  this.canvas.height = size.height;
  map.getPanes().labelPane.appendChild(this.canvas);
  //map.getContainer().appendChild(canvas);
  return this.canvas;
}

ComplexCustomOverlay.prototype.draw = function(){
  this.render();
}

ComplexCustomOverlay.prototype.render = function() {
  const { width, height } = this.canvas;
  this.ctx.clearRect(0, 0, width, height);
  this.ctx.globalCompositeOperation = "lighter";
  this.prepareData().filter(d => d).map(d => {
    d.render(this.ctx, width, height);
  });
}

ComplexCustomOverlay.prototype.prepareData = function() {
  return this._data.map(d => {
    const point = new BMap.Point(d.longitude, d.latitude);
    const px = this._map.pointToOverlayPixel(point);
    return new Dot({
      x: px.x,
      y: px.y,
      size: 15,
      type: d.deptName
    })
  });
}
