import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this)
    };


    play(e) {
        let audio = new Audio(`${this.props.song.song_fileUrl}`);
        audio.play();
    }

    render() {
        return (
            <div>
                <div >
                    <div>
                            <img onClick={this.play} className='pic-splash' src={this.props.song.album_coverUrl}/>
                    </div>

                    

                    <div className='pic-content'>
                        {this.props.song.artist.slice(0,16)}
                    </div>

                    <div className='pic-content-body'>
                        {this.props.song.title.slice(0,16)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongIndexItem;
