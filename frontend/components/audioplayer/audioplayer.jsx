import React from 'react'

class AudioPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            url: null,
            playing: this.props.playState,
            loop: true
        }; 

        this.toggle = this.toggle.bind(this)


    }

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
                <div>

                </div>
            )
        } else {
            return (
                <div >
                    <div ><img src={currentSong.album_coverUrl} /></div>
                    <div >
                        <div>{currentSong.title}</div>
                    </div>
                </div>
            )
        }
    }


    render() {
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

                      

                    </div>

                </div>
                {this.displaySongThumbnail()}


            </div>

        )
    }
}






export default AudioPlayer