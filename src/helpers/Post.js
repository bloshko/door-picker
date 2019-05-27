

class Post {
  constructor(x, y, height) {
    this.x = x;
    this.y = y;
    this.destinationX = this.x;
    this.destinationY = this.y + height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineCap = 'square';
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.destinationX, this.destinationY);
    ctx.stroke();
  }
  
}

export default Post;