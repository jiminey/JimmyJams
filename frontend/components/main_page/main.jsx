import React from 'react' 
import {Link} from 'react-router-dom'
import SongIndexItem from '../song/song_index_item'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'

class Main extends React.Component {

    constructor(props){
        super(props)
    }

   componentDidMount() {
       this.props.fetchAllSongs();
       this.props.fetchAllUsers();
   }

    move() {

        this.props.history.push('/');
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
                <header className='main-navbar'>

                    <div className='main-left'>
                        <div className='header-logo' onClick={this.move}>
                        
                        </div>

                        <button className='home'>
                            <Link className='home2' to='/main'>Home</Link>
                        </button>

                        <button className='stream'>Stream</button>
                        <button className='library'>
                            <Link to='/library'>Library</Link>
                        </button>
                    </div>

                    <div className='main-middle'>
                        <input className='search' type="text" placeholder="Search"/>
                    </div>
                <div>
                    
                </div>
                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>
                            <Link className='upload'to='/upload'>Upload</Link>
                        </div>
                        <div className='username'>Jimmy Nguyen</div>
                        <div className='bell'> </div>
                        <div className='mail'> </div>
                        <div className='dropdown'> . . .</div>

                    </div>
                </header>
    
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
                        <i className='wtf-text' class="fa fa-users" aria-hidden="true"> Who to follow</i>
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
                            <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
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
                            <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
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
                            <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                </div>
                
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i class="fa fa-heart" aria-hidden="true"> You might like</i>
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
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
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
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
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
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i class="fa fa-calendar" aria-hidden="true"> Listening history</i>
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
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
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
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
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
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='go-mobile'>
                    <div className='wtf-title'>
                        <p>Go mobile</p>
                        <p>View All</p>
                    </div>
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
