import React from 'react'
import WaveSurfer from 'wavesurfer.js'

class WaveForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 600,
            loaderPosition: 0,
        }
    }


    componentDidMount() {
        const wave = this.refs.waveform;
        this.wavesurfer = WaveSurfer.create({
            container: wave,
            waveColor: '#F2F2F2',
            progressColor: '#F65502',
            barWidth: 2,
            height: 200,
            fillParent: true,
            cursorWidth: 0,
            interact: true,
            autoCenter: true,
            closeAudioContext: true,
            hideScrollbar: true,
            partialRender: true,
            removeMediaElementOnDestroy: true,
        });

        this.wavesurfer.load(this.props.song);

        this.wavesurfer.on('ready', function () {
            wavesurfer.play();
        });
        
    }

    render() {
        return(
            <div id='waveform' className='waveform' ref='waveform'>
                <div className="outer-loader">
                    <div className="inner-loader">
                    </div>
                </div> 
            </div>
        )
    }
    
}




export default WaveForm;