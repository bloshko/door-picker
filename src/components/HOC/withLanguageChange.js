import React from 'react';

import { connect } from 'react-redux';
import { getLocale } from '../../locales';


const withLanguageChange = (WrappedComponent) => {

  class HOC extends React.Component {
    render() {
      return(
        <WrappedComponent locale={getLocale(this.props.lang)} {...this.props}/>
      )
    }
  }

  return connect(mapStateToProps)(HOC);
};

const mapStateToProps = state => ({
  lang: state.lang,
});

export default withLanguageChange;