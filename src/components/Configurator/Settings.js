import React from 'react';

import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';

import './Settings.css';
import withLanguageChange from '../HOC/withLanguageChange';

class Settings extends React.Component {
  getStep() {
    const stepOrder = [StepOne, StepTwo, StepThree];
    const { step } = this.props;
    return stepOrder[step - 1];
  }
  render() {
    const { step, handleNextStep, handlePreviousStep, locale } = this.props;
    const StepComponent = this.getStep();
    return(       
        <aside className="settings-container">
          <div className="step-settings-container">
            <StepComponent {...this.props} />
          </div>
          <div className="side-btns">
              { step > 2 ? <button className="share-button">{locale.configurator.settings.share}</button> : null}

              { step > 1 ? <button className="change-step-btn white-btn" onClick={handlePreviousStep}>{locale.configurator.settings.back}</button> : null }
              { step > 2 ? null : <button className="change-step-btn blue-btn" onClick={handleNextStep}>{locale.configurator.settings.nextStep}</button>}
          </div>
        </aside>
    )
  }
}

export default withLanguageChange(Settings);