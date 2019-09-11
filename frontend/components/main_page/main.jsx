import React from 'react' 
import {Link} from 'react-router-dom'
import SongIndexItem from '../song/song_index_item'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'
import NavBarContainer from '../navbar/navbar_container'


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

                <div className='display-threes'>
                    <div className='small-pic'> 
                        <p className='small-title'>
                            Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                </div>
                
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className="fa fa-heart" aria-hidden="true"> You might like</i>
                        <p>View All</p>
                    </div>

                    <div className='display-threes'>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                         </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className="fa fa-calendar" aria-hidden="true"> Listening history</i>
                        <p>View All</p>
                    </div>

                    <div className='display-threes'>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                         </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='go-mobile'>
                    <div className='wtf-title'>
                        <p>About the creator </p>
                        <p>View All</p>
                    </div>
                </div>

                <div className='linkedin'>

                    <a href='https://www.linkedin.com/in/jimmy-nguyen-984302138/' target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a href='https://www.jimmynguyen.dev' target="_blank">
                        <i class="fas fa-portrait"></i>
                    </a>

                    <a href='https://github.com/jiminey' target="_blank">
                        <i class="fab fa-github-square"></i>
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
