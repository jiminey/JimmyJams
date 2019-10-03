import React from 'react' 
import {Link} from 'react-router-dom'
import SongIndexItem from '../song/song_index_item'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'
import NavBarContainer from '../navbar/navbar_container'
import UserIndexItem from '../user/user_index_item'

class Main extends React.Component {

    constructor(props){
        super(props)
    }

   componentDidMount() {
       this.props.fetchAllSongs();
       this.props.fetchAllUsers();
   }


    render() {
        
        let songs1 = this.props.songs.slice(4, 8).map(song => {
            return (
                <div key={song.id}>
                    <SongIndexItem
                        key={song.id}
                        path={this.props.location.pathname}
                        song={song} users={this.props.users}
                        playSong={this.props.playSong}
                        pauseSong={this.props.pauseSong}
                        playState={this.props.playState}
                        currentSong={this.props.currentSong}
                        currentAudio={this.props.currentAudio}
                    />
                </div>
            )
        });

        let songs2 = this.props.songs.slice(8, 12).map(song => {
            return (
                <div key={song.id}>
                    <SongIndexItem
                        key={song.id}
                        path={this.props.location.pathname}
                        song={song} users={this.props.users}
                        playSong={this.props.playSong}
                        pauseSong={this.props.pauseSong}
                        playState={this.props.playState}
                        currentSong={this.props.currentSong}
                        currentAudio={this.props.currentAudio}
                    />
                </div>
            )
        });

        let songs3 = this.props.songs.slice(0, 4).map(song => {
            return (
                <div key={song.id}>
                    <SongIndexItem
                        key={song.id}
                        path={this.props.location.pathname}
                        song={song} users={this.props.users}
                        playSong={this.props.playSong}
                        pauseSong={this.props.pauseSong}
                        playState={this.props.playState}
                        currentSong={this.props.currentSong}
                        currentAudio={this.props.currentAudio}
                    />
                </div>
            )
        });

        let users = this.props.users;

        if (this.props.users) {
            users = Object.values(this.props.users)
        }

        let user_index = users.slice(0,4).map (user => {
            return (
                <div key={user.id}>
                    <UserIndexItem
                        key={user.id}
                        user={user}
                    />
                </div>            
            )
        })


        return (
            <div> 
                <NavBarContainer />
    
            <div className='main-page-content'>
    
                <div className='music-content'>

                    <div className='section'>

                            <div className='section-content'>
                                <h1 className='section-title'>JimmyJams Charts</h1>
                                    <h3 className='section-body'>The most played tracks on JimmyJams this week</h3>
                            
                                <div className='main-row'>
                                    {songs1}
                                </div>
                            </div>   
                    </div>

                    <div className='section'>

                            <div className='section-content'>
                                <h1 className='section-title'>JimmyJams Charts</h1>
                                    <h3 className='section-body'>The most played tracks on JimmyJams this week</h3>
                                
                                <div className='main-row'>
                                    {songs2}
                                </div>
                            </div>   
                    </div>

                    <div className='section'>

                            <div className='section-content'>
                                <h1 className='section-title'>JimmyJams Charts</h1>
                                    <h3 className='section-body'>The most played tracks on JimmyJams this week</h3>
                                
                                <div className='main-row'>
                                    {songs3}
                                </div>
                            </div>   
                    </div>

                   
                </div>
                {/* music content */}



            <div className='main-col'>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className='wtf-text' className="fa fa-users" aria-hidden="true"> Who to follow</i>
                        <p>View All</p>
                    </div>

                    <div>
                        {user_index}
                    </div>
                </div>

                <div className='go-mobile'>
                    <div className='wtf-title'>
                        <p>About the creator </p>
                        <p>View All</p>
                    </div>
                </div>

                <div className='linkedin'>

                    <a className="q" href='https://www.linkedin.com/in/jimmythanhnguyen/' target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a className='q2' href='https://www.jimmynguyen.dev' target="_blank">
                        <i className="fas fa-portrait"></i>
                    </a>

                    <a className='q3' href='https://github.com/jiminey' target="_blank">
                        <i className="fab fa-github-square"></i>
                    </a>
                
                </div>

            </div>

            </div> 
            {/* main page content */}
                <AudioPlayerContainer /> 

        </div>
        ) 
    };
};



export default Main
