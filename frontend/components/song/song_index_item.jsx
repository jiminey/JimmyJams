import React from 'react';


class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={this.props.song.album_coverUrl}/>
                    </div>

                    <div>
                        {this.props.song.title}
                    </div>

                    <div>
                        {this.props.song.artist}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongIndexItem;
