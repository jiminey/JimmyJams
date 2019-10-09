import React from 'react'
import { timingSafeEqual } from 'crypto';
// import WaveSurfer from 'wavesurfer.js'
const WaveSurfer = require('wavesurfer.js/dist/wavesurfer');

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
            backend: 'MediaElement',
            interact: true,
            preload: true,
        });


        this.wavesurfer.load(this.props.song.song_fileUrl, null, 'auto');

        this.wavesurfer.on('ready', () => {
            this.setState({ ready: true })
        })
        

        const frameloop = () => { 
            this.frame = requestAnimationFrame(frameloop);
            this.updateProgress();   
        }
        
        frameloop();
    }

    componentDidUpdate() {
    }


    updateProgress() {
        // let player = this.props.currentAudio
        // let progressbar = document.getElementById('waveform');
        // const progressbar = this.waveRef.current
        if (!this.props.currentAudio) return;
        let percentage = percentage || 0; 
        percentage = this.props.currentAudio.currentTime/this.props.currentAudio.duration
        percentage = percentage.toString()
        percentage = percentage.slice(percentage.indexOf('.'), (percentage.indexOf('.')) +3 );
        percentage = parseFloat(percentage);


        if(this.props.song.id === this.props.currentSong.id){
            this.wavesurfer.seekTo(percentage)
        } else {
            this.wavesurfer.seekTo(0)
        }

        document.getElementById("div2").addEventListener("click" , seek.bind(this) );

        function seek(event) {
            let percent = event.offsetX / event.currentTarget.offsetWidth;
            this.props.currentAudio.currentTime = percent * this.props.currentAudio.duration;
            console.log(percent)
            this.wavesurfer.seekTo(percent);
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frame);
        this.wavesurfer.un('ready');
        this.wavesurfer.destroy();
    }


    render() {
        // if (this.props.playState) {
        //     this.props.currentAudio.ontimeupdate = () => { this.updateProgress() }
        // } 
        //requestAnimationFrame
        return(
            <div id='div2'>
                <div id='waveform' className='waveform' ref={this.waveRef}>
                </div>
            </div>
        )
    }
    
}




export default WaveForm;