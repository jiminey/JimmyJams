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

            <div className='banner' >
                <h2 className='banner-main-text'>What's next in music is first on JimmyJams</h2> 

                <h3 className='banner-text'>Upload your first track and begin your journey. JimmyJams 
                gives <br /> you space to create, find your fans, and 
                connect with other <br /> artists.</h3>

                <button className='splash-upload-btn'>Start uploading today</button>
            </div>
        </div>
    </div>
        
);

export default App;