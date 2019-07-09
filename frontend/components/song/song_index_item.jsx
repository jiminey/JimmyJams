import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div >
                    <div>
                        <img className='pic-splash' src={this.props.song.album_coverUrl}/>
                    </div>

                    <div className='pic-content'>
                        {this.props.song.title.slice(0,16)}
                    </div>

                    <div className='pic-content'>
                        {this.props.song.artist.slice(0,16)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongIndexItem;
