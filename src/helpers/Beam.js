
class Beam {
  constructor(offsetX, offsetY, width, lineWidth) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.destinationX = this.offsetX + width;
    this.destinationY = this.offsetY;
    this.lineWidth = lineWidth;
  }

  draw(ctx) {
    ctx.lineCap = 'square';
    ctx.moveTo(this.offsetX, this.offsetY);
    ctx.lineTo(this.destinationX, this.destinationY);
    ctx.stroke();
  }
}

export default Beam;
