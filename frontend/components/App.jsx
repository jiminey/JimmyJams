import React from 'react';
import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
// import {AuthRoute} from '../util/route.util'
import {Route, Switch} from 'react-router-dom';
import MainContainer from './main_page/main_container';
import CreateSongFormContainer from './song/song_form/create_song_container';
import LibraryContainer from './library/library_container';
import SongShowContainer from './song/song_show_container';
import AudioPlayerContainer from './audioplayer/audioplayer_container';


const App = () => (

    

    <div className='splash'>
        <Modal /> 
        <Switch >
            <Route exact path='/songs/:songId' component={SongShowContainer}/> 
            <Route exact path='/library' component={LibraryContainer} />
            <Route exact path='/upload'component={CreateSongFormContainer} /> 
            <Route exact path='/main' component={MainContainer} />
            <Route exact path='/' component={SplashContainer} />
        </Switch>

        <AudioPlayerContainer /> 
    </div>
        
);

export default App;