import React from 'react';
import Modal from './modal/modal'
import SplashContainer from './splash/splash_container'
// import {AuthRoute} from '../util/route.util'
import {Route, Switch} from 'react-router-dom';
import MainContainer from './main_page/main_container'
import UploadFormContainer from './song/song_form/create_song_container'
import LibraryContainer from './library/library_container'
const App = () => (
    

    <div className='splash'>
        <Modal /> 
        <Switch >
            <Route exact path='/library' component={LibraryContainer} />
            <Route exact path='/upload'component={UploadFormContainer} /> 
            <Route exact path='/main' component={MainContainer} />
            <Route exact path='/' component={SplashContainer} />
        </Switch>
    </div>
        
);

export default App;