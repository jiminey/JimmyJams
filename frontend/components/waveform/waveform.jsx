import React from 'react'
import WaveSurfer from 'wavesurfer.js'

class WaveForm extends React.Component {
    constructor(props) {
        super(props)
        this.waveRef = React.createRef();
        this.state = {
            width: 600,
            loading: true,
        }

        this.updateProgress = this.updateProgress.bind(this); 
    }


    componentDidMount() {
        const wave = this.waveRef.current
        this.wavesurfer = WaveSurfer.create({
            container: wave,
            waveColor: '#F2F2F2',
            progressColor: '#F65502',
            barWidth: 2,
            height: 180,
            fillParent: true,
            cursorWidth: 0,
            interact: true,
            autoCenter: true,
            closeAudioContext: true,
            hideScrollbar: true,
            partialRender: true,
            removeMediaElementOnDestroy: true,
        });


        this.wavesurfer.load(this.props.song.song_fileUrl);


        if (this.props.currentSong) {
            if (this.props.currentSong.id === this.props.song.id) {
                this.wavesurfer.load(this.props.currentAudio)
             } 
    
            this.wavesurfer.on('ready', function () {
                this.setState({loading: false})
            });
        }   
    }



    updateProgress() {
        let player = this.props.currentAudio

        // let progressbar = document.getElementById('waveform');
        const progressbar = this.waveRef.current

        progressbar.seekTo(player.currentTime / player.duration);
        document.getElementById("div2").addEventListener("click", seek);

        function seek(event) {
            let percent = event.offsetX / this.offsetWidth;
            player.currentTime = percent * player.duration;
            progressbar.seekTo(percent / 100);
        }
    }

    componentWillUnmount() {
        this.wavesurfer.un('ready');
        this.wavesurfer.destroy();
    }


    render() {

        if (this.props.currentAudio) {
            this.props.currentAudio.ontimeupdate = () => { this.updateProgress() }
        }

        return(
            <div id='div2'>
                <div id='waveform' className='waveform' ref={this.waveRef}>
                </div>
            </div>
        )
    }
    
}




export default WaveForm;