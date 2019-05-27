import React from 'react';
import Preview from './Preview';
import Settings from './Settings';
import withLanguageChange from '../HOC/withLanguageChange';
import './Configurator.css';

const fieldValueRules = {
  doorWidth: {
    min: 1,
    max: 160
  },
  doorHeight: {
    min: 1,
    max: 300
  },
  posts: {
    min: 1,
    max: 4
  },
  beams: {
    min: 1,
    max: 4
  }
}

class Configurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step,
      doorWidth: this.props.doorWidth,
      doorHeight: this.props.doorHeight,
      doubleDoor: this.props.doubleDoor,
      color: this.props.color,
      beams: this.props.beams,
      posts: this.props.posts
    }
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.stepCircles = []
  }

  validateField(field, value) {
    const fieldRules = fieldValueRules[field];
    console.log(fieldRules);
    if(value < fieldRules.min || isNaN(value)) 
      return fieldRules.min;
    else if(value > fieldRules.max) 
      return fieldRules.max;
    return value;
  }

  handleNextStep(event) {
    event.preventDefault();
    const currentStep = this.state.step;
    const nextStep = currentStep >= 3 ? 3 : currentStep + 1;
    this.setState({ step: nextStep });
  }

  handlePreviousStep(event) {
    event.preventDefault();
    const currentStep = this.state.step;
    const previousStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ step: previousStep });
  }

  handleSettingsChange(field, value, validate) {
    this.setState({
      [field]: validate ? this.validateField(field, value) : value
    });
  }

  renderStepCircles() {
    return [1, 2, 3].map(step => {
      return(
        <React.Fragment key={step}>
          <div className={'circle' + (step === this.state.step ? ' circle-current' : '')}></div>
          {step === 3 ? null: <div className="line"></div>}
        </React.Fragment>
      )
    })
  }
  render() {
    const { locale } = this.props;
    const stepCircles = this.renderStepCircles();
    return(
      <section id="configurator-page">
        <div className="step-circles">
          {stepCircles}
        </div>
        <div className="step-description">
          <p>{locale.configurator.steps.first.title}<br/>{locale.configurator.steps.first.description}</p>
          <p>{locale.configurator.steps.second.title}<br/>{locale.configurator.steps.second.description}</p>
          <p>{locale.configurator.steps.third.title}<br/>{locale.configurator.steps.third.description}</p>
        </div>
        <section className="configurator">
          <Preview {...this.state}/>
          <Settings 
            handleSettingsChange={this.handleSettingsChange} 
            handleNextStep={this.handleNextStep}
            handlePreviousStep={this.handlePreviousStep}
            {...this.state}  
          />
        </section>
      </section>
    )
  }
}

export default withLanguageChange(Configurator);
