import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';
import Modal from './modal/modal'
import Splash from './splash/splash'

import {Route, Switch} from 'react-router-dom';

const App = () => (
    

    <div className='splash'>
        <Modal /> 
        <Switch >

        
            <Route exact path='/' component={Splash} />
            <Route path='/' component={Splash} />
        </Switch>
    </div>
        
);

export default App;