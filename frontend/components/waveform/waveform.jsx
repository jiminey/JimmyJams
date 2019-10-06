import React from 'react'
import WaveSurfer from 'wavesurfer.js'

class WaveForm extends React.Component {
    constructor(props) {
        super(props)
        this.waveRef = React.createRef();
        this.state = {
            width: 600,
            loading: false,
        }
    }


    componentDidMount() {
        const wave = this.waveRef.current
        this.wavesurfer = WaveSurfer.create({
            container: wave,
            waveColor: '#F2F2F2',
            progressColor: '#F65502',
            barWidth: 2,
            height: 180,
        });


        this.wavesurfer.load(this.props.song.song_fileUrl);


        if (this.props.currentSong) {
            if (this.props.currentSong.id === this.props.song.id) {
                this.wavesurfer.load(this.props.currentAudio)
             } 
    
            this.wavesurfer.on('ready', function () {
                this.state.loading = true;
            });
        }
        
    }

    handleClick() {
        this.wavesurfer.on('seek', this.handleChange);
    }

    handleChange() {
        if (this.props.currentSong.id === this.props.song.id) {
            // this.wavesurfer.seekTo()
        }
        this.waveSurfer.un('seek', this.handleChange);
    }

    componentWillUnmount() {
        this.wavesurfer.un('ready');
        this.wavesurfer.destroy();
    }


    render() {
        return(
            <div onClick={() => this.handleClick()} onChange={() => this.handleChange()} id='waveform' className='waveform' ref={this.waveRef}>
        
            </div>
        )
    }
    
}




export default WaveForm;