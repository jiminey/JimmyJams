import React from 'react';
import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
import {AuthRoute} from '../util/route.util'
import {Route, Switch} from 'react-router-dom';
import MainContainer from './main_page/main_container';
import CreateSongFormContainer from './song/song_form/create_song_container';
import LibraryContainer from './library/library_container';
import SongShowContainer from './song/song_show_container';
import UserShowContainer from './user/user_show_container';



const App = () => (

    

    <div className='splash'>
        <Modal /> 
        <Switch >
            {/* <Route exact path='/users/:userId' component={UserShowContainer} />  */}
            <AuthRoute exact path='/songs/:songId' component={SongShowContainer}/> 
            <AuthRoute exact path='/library' component={LibraryContainer} />
            <AuthRoute exact path='/upload'component={CreateSongFormContainer} /> 
            <AuthRoute exact path='/main' component={MainContainer} />
            <Route exact path='/' component={SplashContainer} />
        </Switch>

    </div>
        
);

export default App;