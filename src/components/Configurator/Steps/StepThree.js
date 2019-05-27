import React from 'react';
import withLanguageChange from '../../HOC/withLanguageChange';
import './StepThree.css';

function StepThree({ color, handleSettingsChange, locale }) {
  function handleColorChange(event) {
    if(event.target.checked) {
      handleSettingsChange(event.target.name, event.target.value);
    }
  }
  return(
    <div>
      <p>{locale.configurator.settings.chooseColor}</p>
      <div id="color-setings">
        <div className="round-container">
            <div className="round black" />
            <label className="custom-radio">
              {locale.configurator.settings.black}
              <input type="radio" name="color" value={'#000000'} defaultChecked={color === '#000000'} onChange={handleColorChange} />
              <span className="checkmark" />
            </label>
        </div>

        <div className="round-container">
          <div className="round gray" />
          <label className="custom-radio">
            {locale.configurator.settings.gray}
            <input type="radio" name="color" value={'#797474'} defaultChecked={color === '#797474'} onChange={handleColorChange} />
            <span className="checkmark" />
          </label>
        </div>

        <div className="round-container">
            <div className="round white" />
            <label className="custom-radio">
              {locale.configurator.settings.white}
              <input type="radio" name="color" value={'#F4F2F2'} defaultChecked={color === '#F4F2F2'} onChange={handleColorChange} />
              <span className="checkmark" />
            </label>
        </div>
      </div>
    </div>
  )
}

export default withLanguageChange(StepThree);