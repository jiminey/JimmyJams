import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
// import {login, logout, signup} from './actions/session_actions'



document.addEventListener('DOMContentLoaded', () => {
    // const root = document.getElementById('root');
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { currentUser: window.currentUser }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }


    let preloadedState;
    debugger
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
