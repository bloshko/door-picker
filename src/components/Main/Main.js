import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Main.css';

import Login from '../Login/Login';
import Header from '../Header/Header';
import Configurator from '../Configurator/Configurator';

const MainLayout = ({ isAuthenticated }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/login" render={props => isAuthenticated ? <Redirect to="/configurator"/> : <Login {...props} /> } />
        <Route exact path="/configurator" render={
          props => isAuthenticated ? 
            <Configurator 
              step={1} 
              doorWidth={160}
              doorHeight={300}
              doubleDoor={false}
              color="#000000"
              beams={4}
              posts={2} 
              {...props} 
            /> : 
            <Redirect to="/login"/> 
          } />
        <Route exact path="/share" />
        <Route render={props => <Redirect to="/configurator" {...props} />} />
      </Switch>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(MainLayout);
