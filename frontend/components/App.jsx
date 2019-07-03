import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'

import {Route,Switch} from 'react-router-dom'

const App = () => (
    <div>
        <header>
            <h2>Welcome to JimmyJams (in App.jsx)</h2>
        </header>
        <Switch>

            <Route exact path='/' component={GreetingContainer} />
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />

        </Switch>
    </div>

);

export default App;