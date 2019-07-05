import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import Modal from './modal/modal'

import {Route,Switch} from 'react-router-dom';

const App = () => (
    

    <div className='splash'>
        <Modal /> 
        <div className='main-content'>
            <header className='splash-header'>
                <div className='splash-nav-left'>
                    <img className='logo-pic' src="whitecloudlogo.png" alt='lost picture'/>
                    <p className='logo-word'>JimmyJams</p>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/' component={GreetingContainer} />
                        <Route path='/login'  component={LoginFormContainer} />
                        <Route path='/signup' component={SignupFormContainer} />
                    </Switch>
                </div>
            </header>
        </div>
            {/* <img className='coverphoto' src="coverphoto.jpg" alt=""/> */}
    </div>
        
);

export default App;