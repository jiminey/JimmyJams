import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


import {Route,Switch} from 'react-router-dom';
import ModalContainer from './modal/modal_container'

const App = () => (
    <div className='splash'>
        <Modal /> 

        <div className='splash-top'>
            <div className='splash-header'>
                <div className='splash-logo'>
                    <div className ='splash-logo-img'>
                        
                    </div>
                    <div className='splash-logo-word'>
                        <p>JimmyJams</p>
                    </div>
                </div>
                {/* <Switch>
                    <Route exact path='/' component={GreetingContainer} />
                    <Route path='/login'  component={LoginFormContainer} />
                    <Route path='/signup' component={SignupFormContainer} />
                </Switch> */}
            </div>
        


        </div>

        <div className='splash-middle'>

        </div>

        <div className='splash-bottom'>

        </div>

    </div>
);

export default App;