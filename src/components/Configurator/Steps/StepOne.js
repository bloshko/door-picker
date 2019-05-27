import React from 'react';
import InfoIcon from '../../../icon.svg';
import withLanguageChange from '../../HOC/withLanguageChange';
import './StepOne.css';


function StepOne({ doubleDoor, doorWidth, doorHeight, handleSettingsChange, locale }) {

  return(
    <>
      <div className="door-type">
        <p>
            {locale.configurator.settings.doorType}
            <img src={InfoIcon} alt="info" className="info" />
        </p>
        <br />
        <label className="custom-radio">{locale.configurator.settings.singleDoor}
          <input 
            type="radio" 
            name="doubleDoor" 
            defaultChecked={!doubleDoor} 
            onChange={event => handleSettingsChange(event.target.name, !event.target.checked)} 
          />
          <span className="checkmark" />
        </label>
        <label className="custom-radio">{locale.configurator.settings.doubleDoor}
          <input 
            type="radio" 
            name="doubleDoor" 
            defaultChecked={doubleDoor} 
            onChange={event => handleSettingsChange(event.target.name, event.target.checked)} 
          />
          <span className="checkmark" />
        </label>
      </div>
      <br />
      <div className="door-size">
        <p>{locale.configurator.settings.doorSize}</p>
        <br />
        <div className="size-input">
            <label htmlFor="width">{locale.configurator.settings.width}</label>
            <div>
              <input 
                className="cm-input" 
                maxLength="3" 
                type="text"
                name="doorWidth"
                id="width" 
                value={doorWidth} 
                onChange={event => handleSettingsChange(event.target.name, parseInt(event.target.value), true)} 
              />
              <label htmlFor="width">cm</label>
            </div>
        </div>
        <div className="size-input">
            <label htmlFor="height">{locale.configurator.settings.height}</label>
            <div>
              <input 
                className="cm-input" 
                maxLength="3" 
                type="text"
                name="doorHeight"
                id="height"
                value={doorHeight}
                onChange={event => handleSettingsChange(event.target.name, parseInt(event.target.value), true)} 
              />
              <label htmlFor="height">cm</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default withLanguageChange(StepOne);