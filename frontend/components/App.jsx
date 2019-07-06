import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
import {AuthRoute} from '../util/route.util'
import {Route, Switch} from 'react-router-dom';

const App = () => (
    

    <div className='splash'>
        <Modal /> 
        <Switch >
            {/* <ProtectedRoute exact path='/discover' component={DiscoverContainer} /> */}
            <AuthRoute exact path='/' component={SplashContainer} />
            <Route path='/' component={SplashContainer} />
        </Switch>
    </div>
        
);

export default App;