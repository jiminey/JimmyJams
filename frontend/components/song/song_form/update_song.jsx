import React from 'react';

class UpdateSongForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.song;
    };


    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateSong({ id: this.state.id, title: this.state.title })
            .then(() => this.props.closeModal())
    }

    render() {
        

        return (
            <form onSubmit={this.handleSubmit}>
                <div><img src={this.props.song.photoUrl} /></div>
                <div >{this.props.song.title}</div>


                <div>
                    <label >Edit Title:
                        <input type="text" onChange={this.handleChange('title')} placeholder='Please enter a title' />
                    </label>
                </div>

                <div>
                    <label >Edit Artist:
                        <input type="text" onChange={this.handleChange('artist')} placeholder='Please enter an artist' />
                    </label>
                </div>



                <input type="submit" value='Update song' />
            </form>
        )
    }
}

export default UpdateSongForm