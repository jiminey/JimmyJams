import React from 'react'
import {Link} from 'react-router-dom'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'

class SongShow extends React.Component {
    constructor(props){
        super(props)


        this.state = {
            audio: new Audio(`${this.props.song.song_fileUrl}`)
        }
        
        this.handleDelete = this.handleDelete.bind(this)
        this.play = this.play.bind(this)
    };

    toggleDisplay() {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title){
            //pause 
            return (
                <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangepause.png?raw=true' ></img>
            )
            //play
        } else {
            return (
                <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img>
            )
        }
    }

    play(e) {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title){
            this.state.audio.pause();
            this.props.pauseSong()
        } else {
            this.state.audio.play();
            this.props.playSong(this.props.song, this.state.audio);
        }
    }


    componentDidMount() {
        let songId = this.props.match.params.songId ;
        this.props.fetchSong(songId);
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.song.id)
        this.props.history.push('/library')
    }

    render() {

        if (!this.props.song){
            return null;
        }
     

        return (
            <div>





                <header className='main-navbar'>

                    <div className='main-left'>
                        <div className='header-logo'>
                            <Link className='home2' to='/'></Link>
                        </div>
                        <button className='home'>
                            <Link to='/main'>Home</Link>
                        </button>
                        <button className='stream'>Stream</button>
                        <button className='library'>
                            <Link to='/library'>Library</Link>
                        </button>
                    </div>

                    <div className='main-middle'>
                        <input className='search' type="text" placeholder="Search" />
                    </div>
                    <div>

                    </div>
                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>
                            <Link className='upload' to='/upload'>Upload</Link>
                        </div>
                        <div className='username'>Jimmy Nguyen</div>
                        <div className='bell'> </div>
                        <div className='mail'> </div>
                        <div className='dropdown'> . . .</div>

                    </div>
                </header>






                <div className='show-body'>


                   <div className='show-top'>


                       <div className='show-top-left'>
                           <div className='show-top-left-2'> 
                                {/* <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img> */}
                                {this.toggleDisplay()}
                                    <div className='top-words'>
                                        <div className='top-artist'>{this.props.song.artist}</div>
                                        <div className='top-title'>{this.props.song.title}</div>
                                    </div>


                           </div>

                            {/* waveform here */}
                           <div>

                           </div>
                            <button onClick={this.handleDelete}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                       </div>


                       <div className='show-top-right'>
                            <div className='top-right-words'>
                                <div className='day-ago'>20 days ago</div>
                                <div className='genre'>#JimmyJams sound</div>
                            </div>

                            <div>
                                <img className='show-pic' src={this.props.song.album_coverUrl} alt=""/>
                            </div>
                       </div>

                       
                   </div>



                   <div className='show-bottom'>

                       <div className='main-page-content'>
    
                <div className='music-content'>


                    
                
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

                   </div>


                </div> 
            
                <AudioPlayerContainer /> 


            </div>

        )
    };
    
    
};


export default SongShow