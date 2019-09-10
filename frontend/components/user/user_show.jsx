import React from 'react'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'
import NavBarContainer from '../navbar/navbar_container'
import UserSongItem from '../../components/song/user_song_item'

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    };
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.fetchUser(userId);
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.song.id)
    }

    render() {

        let song = this.props.songs.map(song => {
            return (
                <div>
                    <div key={song.title}>
                        <UserSongItem
                            key={song.title}
                            path={this.props.location.pathname}
                            song={song} users={this.props.users}
                            playSong={this.props.playSong}
                            pauseSong={this.props.pauseSong}
                            playState={this.props.playState}
                            currentSong={this.props.currentSong}
                            currentAudio={this.props.currentAudio}
                            deleteSong =  {this.props.deleteSong}
                        />
                    </div>

                </div>
            )
        })

        return (
            <div>
                <NavBarContainer />

                <div className='show-body'>
                    {/* {this.props.songs} */}


                    <div className='show-top'>


                        <div className='show-top-left'>
                            <div className='show-top-left-2'>
                                {/* <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img> */}
                                <img className="user-pic" src={this.props.currentUser.photoUrl} alt=""/>
                                <div className='top-words'>
                                    <div className='user-top-artist'>{this.props.currentUser.username}</div>
                                </div>


                            </div>

                            <div>

                            </div>
                        </div>


                        <div className='show-top-right'>
                            <div className='top-right-words'>
                            </div>

                            <div>
                            </div>
                        </div>


                    </div>



                    <div className='show-bottom'>

                        <div className='main-page-content'>

                            <div className='music-content'>

                                <div className='user-song-content'>
                                    {song}
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