import React, { useState, useEffect, useRef } from 'react';
import Overlay from '../Portals/Overlay';
import withLanguageChange from '../HOC/withLanguageChange';
import './ProgressbarTimed.css';



function ProgressbarTimed({ duration, handleFinish, locale }) {
  const [status, setStatus] = useState(0);
  const interval = duration / 100;
  const progressBarRef = useRef(null);

  useEffect(() => {
    if(status < 100) {
      setTimeout(() => setStatus(status + 1), interval);
    }
  })

  useEffect(() => {
    progressBarRef.current.style.width = status + '%';
  }, [status])

  useEffect(() => {
    progressBarRef.current.style.width = 0 + '%';
  }, [])

  useEffect(() => {
    if(status === 100) {
      handleFinish();
    }
  })



  return (
    <Overlay>
        <div class="progress">
          <h1>{locale.login.progressbar}</h1>
          <div id="progress--border">
            <div id="progress--bar" ref={progressBarRef}></div>
            <p id="progress--status">{status}%</p>
          </div>
        </div>
    </Overlay>

    )
}

export default withLanguageChange(ProgressbarTimed);
