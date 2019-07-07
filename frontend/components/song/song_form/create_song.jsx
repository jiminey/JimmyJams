import React from 'react'


class CreateSong extends React.Component {
    constructor(props){
        this.state = { 
            title: '', 
            albumCoverURL: null, 
            albumCoverFile: null, 
            song_fileURL: null, 
            song_file: null, 
            loading: false 
        };
    }


    handleSubmit(e){
        e.preventDefault();
        
        this.setState({loading: true})

    }


    render () {
        return (
            <div>
                <h1>Upload a SONG</h1> 
                

                <form onSubmit={this.handleSub,mt}>


                </form>

            </div>
        )
    }
}



export default CreateSong