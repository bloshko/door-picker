import Beam from './Beam';
import Post from './Post';

class Door {
  constructor(x, y, width, height, beamsNum, postsNum) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.destinationX = this.x + this.width;
    this.destinationY = this.y + this.height;
    this.beamsNum = beamsNum;
    this.postsNum = postsNum;
    this.beams = this._createBeams();
    this.posts = this._createPosts();
  }

  _createBeams() {
    const doorHeight = this.height;
    const beamsInterval = doorHeight / (this.beamsNum + 1);
    const beams = [];
    for (let beam = 1; beam <= this.beamsNum; beam++) {
      beams.push(new Beam(this.x, this.destinationY - (beamsInterval * beam), this.width));
    }
    return beams;
  }
  
  _createPosts() {
    const doorWidth = this.width;
    const postInterval = doorWidth / (this.postsNum + 1);
    const posts = []
    for (let post = 1; post <= this.postsNum; post++) {
      posts.push(new Post(this.destinationX - (postInterval * post), this.y, this.height));
    }
    return posts;
  }

  draw(ctx) {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.posts.map(post => post.draw(ctx));
    this.beams.map(beam => beam.draw(ctx));
  }

}

export default Door;
