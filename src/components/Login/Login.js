import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import Error from '../Portals/Error';
import ProgressbarTimed from '../Progressbar/ProgressbarTimed';
import withLanguageChange from '../HOC/withLanguageChange';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
      showError: false,
      errorText: '',
      hasError: false,
      disabledLogin: false
    }
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleProgressbarFinish = this.handleProgressbarFinish.bind(this);
    this.progressBarTime = 2000;
  }

  onSuccess(callback) {
    this.setState({showProgress: true}, () => (setTimeout(() => {
      this.setState({showProgress: false});
      callback();
    }, this.progressBarTime)))
  }

  onFailure(errorText) {
    this.setState({showProgress: true, errorText: errorText, hasError: true, disabledLogin: true});
  }

  handleProgressbarFinish() {
    const { hasError} = this.state;
    this.setState({ showProgress: false }, () => {
      if(hasError) {
        this.setState({ showError: true, disabledLogin: false })
      }
    }) 
  }
  
  handleErrorClose() {
    this.setState({ showError: false, hasError: false });
  }

  render() {
    const { locale } = this.props;
    const { disabledLogin } = this.state;
    return (
      <section id="login-page">
          <div className="form-container">
            <h1 className="big-text" id="log-text">{locale.login.title}</h1>
            <LoginForm 
              onSuccess={this.onSuccess} 
              onFailure={this.onFailure}
              disabledLogin={disabledLogin}
            />
          </div>
          { this.state.showProgress ? <ProgressbarTimed duration={this.progressBarTime} handleFinish={this.handleProgressbarFinish} /> : null }
          { this.state.showError ? <Error text={this.state.errorText} handleClose={this.handleErrorClose} /> : null }
      </section>
    )
  }

}

export default withLanguageChange(Login);