import React from 'react'

//check line 9

class SongShow extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.song
    };

    componentDidMount() {
        let songId = this.props.match.params.songId ;
        this.props.fetchSong(songId);
    }


    render() {
                
        return (
            <div>
                <h1>{this.props.song.title}</h1>
                <h2>{this.props.song.artist}</h2>

                <div>
                    <img src={this.props.song.album_coverUrl} alt="lost photo"/>
                </div>

            </div>

        )
    };
    
    
};


export default SongShow