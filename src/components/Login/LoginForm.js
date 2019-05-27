import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../actions/authActions';
import { config } from '../../config';
import { setToken } from '../../helpers/session';
import withLanguageChange from '../HOC/withLanguageChange';

const LoginForm = ({ onSuccess, onFailure, loginUser, locale, disabledLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  function createApiUrl () {
    return config.baseApiUrl + config.endpoints.login;
  }

  function createRequestBody() {
    const body = JSON.stringify({
      email,
      password
    });
    return body;
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(createApiUrl(), {
      method: 'POST',
      body: createRequestBody(),
      headers: {
        'Content-Type': 'application/json' 
      },
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(locale.login.invalidCredentials);
      }
    })
    .then(resJson => {
        setToken(resJson.token, !keepLoggedIn);
        onSuccess(() => {
          loginUser();
        });
    })
    .catch(err => {
      onFailure(err.message);
    });
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input 
        className="medium-text input-box input-border"
        type="email"
        name="email"
        value={email}
        placeholder={locale.login.email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        className="medium-text input-box input-border"
        type="password"
        name="password"
        value={password}
        placeholder={locale.login.password}
        onChange={event => setPassword(event.target.value)}
      />
      <label className="container">
        {locale.login.keepLoggedin}
        <input 
          type="checkbox"
          value={locale.login.keepLoggedin}
          onChange={event => setKeepLoggedIn(event.target.checked)}
        />
        <span className="checkmark" />
      </label>
      <input
        type="submit"
        className="medium-text login-btn input-box"
        value={locale.login.loginButton}
        disabled={disabledLogin}
      />
    </form>
  )
}
const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUserAction())
})
export default connect(null, mapDispatchToProps)(withLanguageChange(LoginForm));
