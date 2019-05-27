import Door from './Door';

const leftDoorStartX = 200;
const leftDoorStartY = 150;
const doorMargin = 10;

class DoorBuilder {
  constructor(canvas, width, height, double, color, beams, posts) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineWidth = 7;
    this._draw(width, height, double, color, beams, posts);
  }
  redraw(width, height, double, color, beams, posts) {
    this._clean();
    this._draw(width, height, double, color, beams, posts);
  }
  _getRightDoorStartPoints(width) {
    const rightDoorStartX = leftDoorStartX + width + doorMargin;
    const rightDoorStartY = leftDoorStartY;
    return [rightDoorStartX, rightDoorStartY];
  }

  _draw(width, height, double, color, beams, posts) {
    this.ctx.strokeStyle = color;
    const leftDoor = new Door(leftDoorStartX, leftDoorStartY, width, height, beams, posts);
    if(double) {
      const [rightDoorStartX, rightDoorStartY] = this._getRightDoorStartPoints(width);
      const rightDoor = new Door(rightDoorStartX, rightDoorStartY, width, height, beams, posts);
      rightDoor.draw(this.ctx);
    }
    leftDoor.draw(this.ctx);
  }
  
  _clean() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
export default DoorBuilder;
