import React from 'react';
import {Link} from 'react-router-dom'


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this)
        this.toggleDisplay = this.toggleDisplay.bind(this)
    };


    play(e) {
      
    }

    toggleDisplay() {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title) {
            //pause 
            return (
                <img onClick={this.play} className='orangeplay1' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangepause.png?raw=true' ></img>
            )
            //play
        } else {
            return (
                <img onClick={this.play} className='orangeplay1' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img>
            )
        }
    }



    render() {
        return (
            <div>
                <div >
                    <div className="shrinkdiv">
                        <Link to={`/songs/${this.props.song.id}`}>
                            <img className='pic-splash' src={this.props.song.album_coverUrl}/>
                        </Link>
                        {this.toggleDisplay()}
                    </div>

                    
                
                    <div className='pic-content'>
                        {this.props.song.artist.slice(0,16)}
                    </div>

                    <div className='pic-content-body'>
                        {this.props.song.title.slice(0,16)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongIndexItem;
