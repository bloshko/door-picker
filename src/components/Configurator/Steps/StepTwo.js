import React from 'react';
import withLanguageChange from '../../HOC/withLanguageChange';
import './StepTwo.css';

function StepTwo({ beams, posts, handleSettingsChange, locale }) {
  
  return(
    <>
      <div className="door-division">
        <p>{locale.configurator.settings.doorDivision}</p>
        <br />
        <div className="beams-setting">
          <p>{locale.configurator.settings.beams}</p>
          <div className="input-buttons-container">
              <input 
                className="square" 
                maxLength="1" 
                type="text"
                value={beams}
                name="beams" 
                id="beams"
                onChange={event => handleSettingsChange(event.target.name, parseInt(event.target.value), true)}
              />
              <button className="square plus" name="beams" onClick={event => handleSettingsChange(event.target.name, beams + 1, true)}>+</button>
              <button className="square minus" name="beams" onClick={event => handleSettingsChange(event.target.name, beams - 1, true)}>-</button>
          </div>
        </div>

        <div className="posts-setting">
          <p>{locale.configurator.settings.posts}</p>
          <div className="input-buttons-container">
              <input 
                className="square" 
                maxLength="1" 
                type="text"
                value={posts}
                name="posts" 
                id="posts"
                onChange={event => handleSettingsChange(event.target.name, parseInt(event.target.value), true)}
              />
              <button className="square plus" name="posts" onClick={event => handleSettingsChange(event.target.name, posts + 1, true)}>+</button>
              <button className="square minus" name="posts" onClick={event => handleSettingsChange(event.target.name, posts - 1, true)}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withLanguageChange(StepTwo);