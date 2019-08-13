import React from 'react'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'
import NavBarContainer from '../navbar/navbar_container'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    };

    toggleDisplay() {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title) {
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

    // play(e) {
    //     if (this.props.playState && this.props.currentSong.title === this.props.song.title && this.props.currentAudio) {
    //         this.props.pauseSong()
    //         this.props.currentAudio.pause();
    //     } else if (this.props.currentAudio && this.props.playState === false) {
    //         this.props.playSong(this.props.song, this.props.currentAudio);
    //         this.props.currentAudio.play();
    //     } else {
    //         this.props.playSong(this.props.song, this.state.localAudio)
    //         this.state.localAudio.play();
    //     }
    // }


    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.fetchUser(userId);
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.song.id)
        this.props.history.push('/library')
    }

    render() {

        let song = this.props.songs.map(song => {
            return (
                <div>
                    <img src={song.album_coverUrl} alt=""/>
                    {song.title}
                    {song.artist}
                </div>
            )
        })

        return (
            <div>
                <NavBarContainer />

                <div className='show-body'>
                    {console.log(this.props.songs)}


                    <div className='show-top'>


                        <div className='show-top-left'>
                            <div className='show-top-left-2'>
                                {/* <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img> */}
                                {this.toggleDisplay()}
                                <div className='top-words'>
                                    <div className='top-artist'>{this.props.currentUser.username}</div>
                                    {/* <div className='top-title'>{this.props.song.title}</div> */}
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
                                {/* <img className='show-pic' src={this.props.song.album_coverUrl} alt="" /> */}
                            </div>
                        </div>


                    </div>



                    <div className='show-bottom'>


                        {song}

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


export default UserShow