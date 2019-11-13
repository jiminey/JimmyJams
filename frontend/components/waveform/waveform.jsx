import React from "react";
import { timingSafeEqual } from "crypto";
// import WaveSurfer from 'wavesurfer.js'
const WaveSurfer = require("wavesurfer.js/dist/wavesurfer");

class WaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.waveRef = React.createRef();
    this.state = {
      ready: false
    };
    this.wavesurfer = null;
    this.updateProgress = this.updateProgress.bind(this);
    this.player = this.props.currentAudio;
    this.seek = this.seek.bind(this);
  }

  componentDidMount() {
    const wave = this.waveRef.current;

    this.wavesurfer = WaveSurfer.create({
      container: wave,
      waveColor: "#F2F2F2",
      progressColor: "#F65502",
      barWidth: 2,
      barGap: null,
      width: 500,
      height: 173,
      backend: "MediaElement",
      interact: true,
      preload: true
    });

    this.wavesurfer.load(this.props.song.song_fileUrl, null, "auto");

    const frameloop = () => {
      this.frame = requestAnimationFrame(frameloop);
      this.updateProgress();
    };

    this.wavesurfer.on("ready", () => {
      frameloop();
    });
  }

  componentDidUpdate() {}

  updateProgress() {
    if (!this.props.currentAudio) return;
    let percentage = percentage || 0;
    percentage =
      this.props.currentAudio.currentTime / this.props.currentAudio.duration;
    percentage = percentage.toString();
    percentage = percentage.slice(
      percentage.indexOf("."),
      percentage.indexOf(".") + 3
    );
    percentage = parseFloat(percentage);

    if (this.props.song.id === this.props.currentSong.id) {
      this.wavesurfer.seekTo(percentage);
    } else {
      this.wavesurfer.seekTo(0);
    }

    document.getElementById("div2").addEventListener("click", this.seek);
  }

  seek(event) {
    let percent = event.offsetX / 500;
    percent = percent.toString();
    percent = percent.slice(percent.indexOf("."), percent.indexOf(".") + 3);
    percent = parseFloat(percent);

    this.props.currentAudio.currentTime =
      percent * this.props.currentAudio.duration;
    this.wavesurfer.seekTo(percent);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
    document.getElementById("div2").removeEventListener("click", this.seek);
    this.wavesurfer.un("ready");
    this.wavesurfer.destroy();
  }

  render() {
    return (
      <div id="div2">
        <div id="waveform" className="waveform" ref={this.waveRef}></div>
      </div>
    );
  }
}

export default WaveForm;
