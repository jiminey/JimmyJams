import React from 'react'

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
        // this.updateVolume = this.updateProgress.bind(this)

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


    // updateVolume() {
    //     let volumeslider = document.getElementById('vslider')
    //     if (volumeslider && this.props.currentAudio) {
    //         this.setSate({volume: volumeslider.value})
    //         this.props.currentAudio.volume = this.state.volume;
    //     }
    // }



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
        progressbar.addEventListener("click", seek);

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
                <div onClick={this.toggle} className='p2'>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                </div>
            )
        } else {
            return (
                <div onClick={this.toggle} className='p2'>
                    <i class="fa fa-play" aria-hidden="true" ></i>
                </div>
            )
        }
    }

    displaySongThumbnail() {
        let currentSong = this.props.currentSong

        if (currentSong === undefined) {
            return (
                <div className="thumbnail">
                    <p></p>
                    <p>
                        <p></p>
                        <p></p>                        
                    </p>
                </div>
            )
        } else {
            return (
                <div className="thumbnail">
                    <div>< img src={currentSong.album_coverUrl} className="playbarimg" /></div>

                    <div className="subthumbnail">
                        <div className="stn1">{currentSong.artist.slice(0,20)}</div>
                        <div>{currentSong.title.slice(0,20)}</div>
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
                            <i class="fa fa-step-backward" aria-hidden="true"></i>
                        </div>
                        {/* if state is playing than pause button else play button */}

                        {this.toggleDisplay()}
                           
            
                        <div className='p3'>
                            <i class="fa fa-step-forward" aria-hidden="true"></i>
                        </div>

                        <div className='playbar-mid'>
                            <small className="timestampleft"  id="start-time">0:00</small>
                            
                            <div className="click-progress" id="seekbar">
                                <progress type="range" className="seekbar" id="seekbar" value="0" max="1"></progress>
                            </div>

                            <small className="timestampright" id="end-time">0:00</small>

                            
                            <i class="fas fa-volume-up"></i>

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