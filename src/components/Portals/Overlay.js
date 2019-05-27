import React from 'react';
import ReactDOM from 'react-dom';
import withBackgroundBlur from '../HOC/withBackgroundBlur';

const overlayRoot = document.getElementById('overlay-root');

const style = {
  position: 'absolute',
  display: 'grid',
  top: 0,
  left: 0,
  opacity: '0.83',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ADB2B5',
  placeItems: 'center center'
}

function Overlay({ children }) {
  return ReactDOM.createPortal(
    <div id="overlay" style={style}>
      {children}
    </div>,
    overlayRoot
  )
}

export default withBackgroundBlur(Overlay, '#root');