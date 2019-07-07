import React from 'react';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
// import {AuthRoute} from '../util/route.util'
import {Route, Switch} from 'react-router-dom';
import MainContainer from './main_page/main_container'

const App = () => (
    

    <div className='splash'>
        <Modal /> 
        <Switch >
            {/* <ProtectedRoute exact path='/discover' component={DiscoverContainer} /> */}

            <Route exact path='/main' component={MainContainer} />
            <Route exact path='/' component={SplashContainer} />
        </Switch>
    </div>
        
);

export default App;