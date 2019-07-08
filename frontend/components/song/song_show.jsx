import React from 'react'

//check line 9

class songShow extends React.Compoent {
    constructor(props){
        super(props)

        this.state = this.props.song
    };

    componentDidMount() {
        let songId = this.props.match.params.songId ;
        this.props.fetchSong(songId);
    }


    render() {
        let song = this.props.song 
                
        return (
            <div>
                
                <h1>{song.title}</h1>
                <h2>{song.artist}</h2>

                <div>
                    <img src={song.album_coverURL} alt="lost photo"/>
                </div>

            </div>

        )
    };
    
    
};


export default songShow