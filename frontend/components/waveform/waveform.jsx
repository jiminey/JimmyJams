import React from 'react'
import WaveSurfer from 'wavesurfer.js'

class WaveForm extends React.Component {
    constructor(props) {
        super(props)
        this.waveRef = React.createRef();
        this.state = {
            width: 600,
            loaderPosition: 0,
        }
    }


    componentDidMount() {
        const wave = this.waveRef.current
        this.wavesurfer = WaveSurfer.create({
            container: wave,
            waveColor: '#F2F2F2',
            progressColor: '#F65502',
            barWidth: 2,
            height: 200,
        });

        this.wavesurfer.load(this.props.song.song_fileUrl);

        this.wavesurfer.on('ready', function () {
            this.wavesurfer.play();
        });
        
    }

    render() {
        return(
            <div id='waveform' className='waveform' ref={this.waveRef}>
        
            </div>
        )
    }
    
}




export default WaveForm;