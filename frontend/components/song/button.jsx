import React from 'react'

export default class button extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            audio: new Audio(`${this.props.song.song_fileUrl}`)
        }
        this.play = this.play.bind(this)
    }


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

    play(e) {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title) {
            this.state.audio.pause();
            this.props.pauseSong()
        } else {
            this.state.audio.play();
            this.props.playSong(this.props.song, this.state.audio);
        }
    }
    
    
    
    render() {

        if (!this.props.song) {
            return null;
        }

        return (
            <div>
                {this.toggleDisplay()}
            </div>
        )
    }
}
