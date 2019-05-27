import React from 'react';
import ReactDOM from 'react-dom';

import './Error.css';


const overlayRoot = document.getElementById('overlay-root');

function Error ({ text, handleClose }) {
  return(
    ReactDOM.createPortal(
      <div className="error-bar">
        { text }
        <button className="close-icon" onClick={handleClose} />
      </div>,
    overlayRoot)
  )
}

export default Error;
