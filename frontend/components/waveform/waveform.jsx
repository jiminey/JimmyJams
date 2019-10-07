import React from 'react'
import WaveSurfer from 'wavesurfer.js'
// const WaveSurfer = require('wavesurfer.js/dist/wavesurfer');

class WaveForm extends React.Component {
    constructor(props) {
        super(props)
        this.waveRef = React.createRef();
        this.state = {
            ready: false,
        }
        this.wavesurfer = null;
        this.updateProgress = this.updateProgress.bind(this); 
        this.player = this.props.currentAudio        
    }

    componentDidMount() {
        const wave = this.waveRef.current
        this.wavesurfer = WaveSurfer.create({
            container: wave,
            waveColor: '#F2F2F2',
            progressColor: '#F65502',
            barWidth: 2,
            height: 180,
            backend: 'MediaElement'
        });


        this.wavesurfer.load(this.props.song.song_fileUrl);

        this.wavesurfer.on('ready', () => {
            this.setState({ ready: true })
        })
    }

    componentDidUpdate() {
        // if (this.props.currentAudio && this.props.playState && this.props.song.id === this.props.currentSong.id) {
        //     this.wavesurfer.seekTo(this.player.currentTime / this.player.duration);
        // } else {
        //     this.wavesurfer.seekTo(0);
        // }
    }


    updateProgress() {
        // let player = this.props.currentAudio
        // let progressbar = document.getElementById('waveform');
        // const progressbar = this.waveRef.current
        
        if(this.props.song.id === this.props.currentSong.id){
            this.wavesurfer.seekTo(this.player.currentTime / this.player.duration);
        } else {
            this.wavesurfer.seekTo(0)
        }

        document.getElementById("div2").addEventListener("click", seek);

        function seek(event) {
            let percent = event.offsetX / event.offsetWidth;
            this.player.currentTime = percent * this.player.duration;
            this.wavesurfer.seekTo(percent / 100);
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