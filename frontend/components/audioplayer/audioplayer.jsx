import React from 'react'
import {Link} from 'react-router-dom'

class AudioPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            url: null,
            playing: this.props.playState,
            loop: true,
        }; 

        this.toggle = this.toggle.bind(this)
        this.updateProgress = this.updateProgress.bind(this) //bind ctx
        this.calculateCurrentValue = this.calculateCurrentValue.bind(this)
        this.calculateTotalValue = this.calculateTotalValue.bind(this)
    }

    calculateTotalValue(length) {

        let minutes = Math.floor(length / 60),
            seconds_int = length - minutes * 60,
            seconds_str = seconds_int.toString(),
            seconds = seconds_str.substr(0, 2),
            time = minutes + ':' + seconds

        return time;
    }

    calculateCurrentValue(currentTime) {

        let current_minute = parseInt(currentTime / 60) % 60,
            current_seconds_long = currentTime % 60,
            current_seconds = current_seconds_long.toFixed(),
            current_time = current_minute + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

        return current_time;
    }

    updateProgress() {
        let player = this.props.currentAudio
        let length = player.duration
        let current_time = player.currentTime;

        let totalLength = this.calculateTotalValue(length)
        if (this.props.currentAudio){
            document.getElementById("end-time").innerHTML = totalLength;
        }

        let currentTime = this.calculateCurrentValue(current_time);
        if (this.props.currentAudio){
            document.getElementById("start-time").innerHTML = currentTime;
        }

        let progressbar = document.getElementById('seekbar');
        let volumeslider = document.getElementById('vslider')
        
        progressbar.value = (player.currentTime / player.duration);
        document.getElementById("div").addEventListener("click", seek);

        player.volume = volumeslider.value/100;

        function seek(event) {
            let percent = event.offsetX / this.offsetWidth;
            player.currentTime = percent * player.duration;
            progressbar.value = percent / 100;            
        }
    };


    toggle(){
        if(this.state.playing){
            this.props.currentAudio.pause(); 
            this.props.pauseSong();
        } else {
            this.props.currentAudio.play();
            this.props.resume();
        }

        this.setState({ playing: !this.state.playing });
    }

    toggleDisplay() {
        if (this.props.playState) {
            return (
                <div onClick={this.toggle} className='p3'>
                    <i className="fa fa-pause fa-sm" aria-hidden="true"></i>
                </div>
            )
        } else {
            return (
                <div onClick={this.toggle} className='p3'>
                    <i className="fa fa-play fa-sm" aria-hidden="true" ></i>
                </div>
            )
        }
    }

    displaySongThumbnail() {
        let currentSong = this.props.currentSong

        if (currentSong === undefined) {
            return (
                <div className="thumbnail">
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>                        
                    </div>
                </div>
            )
        } else {

            return (
                <div className="thumbnail">

                    <div>
                        <Link to={`/songs/${currentSong.id}`}>
                            < img src={currentSong.album_coverUrl} className="playbarimg" />
                        </Link>
                    </div>

                    <div className="subthumbnail">
                        <Link to={`/songs/${currentSong.id}`}>
                            <div className="stn1">{currentSong.artist.slice(0,14)}</div>
                        </Link>
                        <Link to={`/songs/${currentSong.id}`}>
                            <div className="stn2">{currentSong.title.slice(0,14)}</div>
                        </Link>
                    </div>
                    <div className="icon-playbar">
                        <i className="heartt" className="fa fa-heart fa-xs" aria-hidden="true"></i>
                        <i className="bars"className="fa fa-bars" aria-hidden="true"></i>
                    </div>

                </div>
            )
        }
    }


    render() {

        if (this.props.currentAudio) {
            this.props.currentAudio.ontimeupdate = () => { this.updateProgress() } 
        }
        return (

            <div className='playbar'>
                
                <div className='playbar-sub'>
                    <div className='playbar-left'>
                    

                        <div className='p1'>
                            <i className="fa fa-step-backward fa-sm" aria-hidden="true"></i>
                        </div>
                        {/* if state is playing than pause button else play button */}

                        {this.toggleDisplay()}
                           
            
                        <div className='p1'>
                            <i className="fa fa-step-forward fa-sm" aria-hidden="true"></i>
                        </div>

                        <div className='p1'>
                            <i className="fa fa-random fa-sm" aria-hidden="true"></i>
                        </div>
                        
                        <div className='p1'>
                            <i className="fa fa-undo fa-sm" aria-hidden="true"></i>
                        </div>

                        <div className='playbar-mid'>
                            <small className="timestampleft"  id="start-time">0:00</small>
                            
                            <div className="click-progress" id="div">
                                <progress type="range" className="seekbar" id="seekbar" value="0" max="1"></progress>
                            </div>

                            <small className="timestampright" id="end-time">0:00</small>


                            <i className="fas fa-volume-up"></i>

                                <input id='vslider' className="vol" type="range" min="1" max="100" step="1" />



                        </div>


                    </div>

                    {this.displaySongThumbnail()}

                </div>


            </div>

        )
    }
}






export default AudioPlayer