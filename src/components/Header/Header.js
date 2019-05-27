import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import withLanguageChange from '../HOC/withLanguageChange';
import { changeLang } from '../../actions/langActions';
import './Header.css';
import AppLoverLogo from '../../AppLoverLogo.png';

const Header = ({ isAuthenticated, changeLang, locale }) => {
  function handleLanguageChange(event) {
    event.preventDefault();
    changeLang(event.target.value);
  }

  useEffect(() => {
    if(isAuthenticated) {
      //fetch organization
    }
  }, [isAuthenticated])

  return (
    <header>
        <img id="logo-img" src={AppLoverLogo} alt="AppLover" />
        <section id="container-lang-org">
          <label htmlFor="lang">
            {locale.header.selectLanguage}
            <select id="lang" name="lang" onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="pl">Polski</option>
            </select>
          </label>
          { isAuthenticated ? <button id="organization-btn">{locale.header.organization.name}</button> : null }
        </section>
    </header>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  changeLang: lang => dispatch(changeLang(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(withLanguageChange(Header));