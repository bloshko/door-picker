import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './components/Main/Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import authReducer, { setDefaultAuth } from './reducers/authReducer';
import langReducer, { setDefaultLang } from './reducers/langReducer';

const defaultState = {
  auth: setDefaultAuth(),
  lang: setDefaultLang()
};

const allReducers = combineReducers({
  auth: authReducer,
  lang: langReducer
});

const store = createStore(allReducers, defaultState);

ReactDOM.render(<Provider store={store}>
                  <BrowserRouter>
                    <MainLayout />
                  </BrowserRouter>
                </Provider>, 
                document.getElementById('root'));


serviceWorker.unregister();
