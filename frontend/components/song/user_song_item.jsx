import React from 'react';
import { Link } from 'react-router-dom'


class UserSongItem extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this)
        this.toggleDisplay = this.toggleDisplay.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            localAudio: new Audio(`${this.props.song.song_fileUrl}`)
        }
    };

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.song.id)
    }


    play(e) {

        if (this.props.playState && (this.props.currentSong.title === this.props.song.title) && this.props.currentAudio) {
            this.props.pauseSong()
            this.props.currentAudio.pause();

        } else if (this.props.currentAudio && this.props.playState === false) {
            if (this.props.currentAudio) {
                this.props.currentAudio.currentTime = 0;
            }
            this.props.currentAudio.play();
            this.props.playSong(this.props.song, this.props.currentAudio);
        } else {
            if (this.props.currentAudio) {
                this.props.currentAudio.currentTime = 0;
            }
            this.props.playSong(this.props.song, this.state.localAudio)
            this.state.localAudio.play();
        }

    }

    toggleDisplay() {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title) {
            //pause 
            return (
                <img onClick={() => this.play()} className='orangeplay1' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangepause.png?raw=true' ></img>
            )
            //play
        } else {
            return (
                <img onClick={() => this.play()} className='orangeplay1' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img>
            )
        }
    }



    render() {
        return (
            <div>

                <div className='main-user'>
                    <div className="other-user-song-content">

                        <div className="shrinkdiv">
                            <Link to={`/songs/${this.props.song.id}`}>
                                <img className='pic-splash' src={this.props.song.album_coverUrl} />
                            </Link>
                            {this.toggleDisplay()}
                        </div>


                        <div className="user-song-words">
                            <div>
                                <div className='user-artist'>
                                    {this.props.song.artist}
                                </div>

                                <div className='user-title'>
                                    {this.props.song.title}
                                </div>
                            </div>

                            <div >
                                <img className="user-wave" src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/userwaveform.png?raw=true" alt=""/>
                            </div>
                        </div>

                    </div>

                    <div className='userbuttons'>

                        <button className='user-trash' onClick={this.handleDelete}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>

                        <button className='user-trash' onClick={this.handleDelete}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>

                    </div>

                </div>
            </div>
        );
    }
}

export default UserSongItem;
