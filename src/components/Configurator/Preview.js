import React from 'react';
import DoorBuilder from '../../helpers/DoorBuilder';
import './Preview.css';

const canvasWidth = 800;
const canvasHeight = 600;

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    const { doorWidth, doorHeight, doubleDoor, color, beams, posts } = this.props;
    this.state = {
      doorWidth: doorWidth,
      doorHeight: doorHeight,
      doubleDoor: doubleDoor,
      color: color,
      beams: beams,
      posts: posts
    }
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const { doorWidth, doorHeight, doubleDoor, color, beams, posts } = this.state;
    const canvas = this.canvasRef.current;
    this.doorBuilder = new DoorBuilder(canvas, doorWidth, doorHeight, doubleDoor, color, beams, posts);
  }

  componentDidUpdate(prevProps) {
    const { doorWidth, doorHeight, doubleDoor, color, beams, posts } = this.props;
    this.doorBuilder.redraw(doorWidth , doorHeight, doubleDoor, color, beams, posts);
  }

  render() {
    return(
      <main className="preview">
        <canvas 
          width={canvasWidth}
          height={canvasHeight}
          ref={this.canvasRef}
        />
        <div className="preview-mode--btns-container">
          <button className="preview-mode--btn">3D</button>
          <button className="preview-mode--btn current-mode ">2D</button>
        </div>
      </main>
    )
  }
}
