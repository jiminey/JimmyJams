import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
// import {login, logout, signup} from './actions/session_actions'



document.addEventListener('DOMContentLoaded', () => {
    
    let preloadedState
    if (window.currentUser) {
        preloadedState = {
            session: { currentUser: window.currentUser },
        };
    }
   
    
    const root = document.getElementById('root');
    const store = configureStore(preloadedState);

    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.store = store;
    // window.login = login; 
    // window.signup = signup;
    // window.logout = logout;
    
    
    ReactDOM.render(<Root store={store} />  , root);
});
