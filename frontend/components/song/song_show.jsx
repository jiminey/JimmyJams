import React from 'react'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'
import NavBarContainer from '../navbar/navbar_container'
import CommentIndexItem from '../comment/comment_index_item'
import UserIndexItem from '../user/user_index_item'
import WaveForm from '../waveform'


class SongShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            localAudio: '',
        }
        
        this.handleDelete = this.handleDelete.bind(this)
        this.play = this.play.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.handleX = this.handleX.bind(this)
    };

    handleX(e) {
        e.preventDefault();
        let commentId = this.props.comments.params.match.commentId
        this.props.removeComment(commentId)
    }

    handleSubmit(e) {
        e.preventDefault();
        let songId = this.props.match.params.songId;
        this.props.createComment({body: this.state.body}, songId).then(() => this.setState({ body: '' }));
    }

    handleComment(e) {
        e.preventDefault();
        this.setState( { body: e.target.value } );
    }

    toggleDisplay() {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title){
            //pause 
            return (
                <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangepause.png?raw=true' ></img>
            )
            //play
        } else {
            return (
                <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img>
            )
        }
    }

    play(e) {
        if (this.props.playState && this.props.currentSong.title === this.props.song.title && this.props.currentAudio) {
            this.props.pauseSong()
            this.props.currentAudio.pause();
        } else if (this.props.currentAudio && this.props.playState === false) {
            this.props.playSong(this.props.song, this.props.currentAudio);
            this.props.currentAudio.play();
        } else {
            this.props.playSong(this.props.song, this.state.localAudio)
            this.state.localAudio.play();
        }
    }


    componentDidMount() {
        let songId = this.props.match.params.songId ;
        this.props.fetchAllUsers().then(() => this.props.fetchSong(songId))
        .then( () => 
            this.setState({
                localAudio: new Audio(`${this.props.song.song_fileUrl}`)
            })
        )
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.song.id)
        this.props.history.push('/library')
    }

    render() {
        let showcomments;
        if (!this.props.song){
            return null;
        }

        if (this.props.song === undefined) {
            return (
                <div></div>
            )
        }
        else {
            let currentUser = this.props.currentUser;
            let comments = this.props.comments
           

            if (this.props.comments) {
                comments = Object.values(this.props.comments);
            }
            
            showcomments = comments.slice(0).reverse().map(comment => {
                if (comment.song_id === this.props.song.id) {
                    return (
                        <div key={comment.id}>
                            <CommentIndexItem currentUser={this.props.currentUser} comment={comment} users={this.props.users} deleteComment={this.props.deleteComment} />
                        </div>
                    )
                }
            })
        }

        let users = this.props.users;

        if (this.props.users) {
            users = Object.values(this.props.users)
        }

        let user_index = users.slice(0, 4).map(user => {
            return (
                <div key={user.id}>
                    <UserIndexItem
                        key={user.id}
                        user={user}
                    />
                </div>
            )
        })

        let pic;
        if (this.props.currentUser) {
            pic = this.props.currentUser.photoUrl
        } else {
            pic = 'https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/profilepic.png?raw=true'
        }

        return (
            <div>
                <NavBarContainer /> 
                <div className='show-body'>


                   <div className='show-top'>


                       <div className='show-top-left'>
                           <div className='show-top-left-2'> 
                                {this.toggleDisplay()}
                                    <div className='top-words'>
                                        <div className='top-artist'>{this.props.song.artist}</div>
                                        <div className='top-title'>{this.props.song.title}</div>
                                        <div>
                                            {/* <img className='waveform' src='waveform.png'></img> */}
                                            <WaveForm 
                                            song={this.props.song} 
                                            currentSong={this.props.currentSong} 
                                            currentAudio={this.props.currentAudio} 
                                            playState={this.props.playState} 
                                            />

                                        </div>
                                    </div>
                           </div>
                           <div>

                           </div>
                       </div>


                       <div className='show-top-right'>
                            <div className='top-right-words'>
                                <div className='day-ago'>20 days ago</div>
                                <div className='genre'>#JimmyJams sound</div>
                            </div>

                            <div>
                                <img className='show-pic' src={this.props.song.album_coverUrl} alt=""/>
                            </div>
                       </div>

                       
                   </div>



                   <div className='show-bottom'>

                       <div className='main-page-content'>
    
                <div className='music-content'>

                            <div className="commentbox">
                                <div>
                                    <img className='comment-input-pic' src={pic} alt="" />
                                </div>
                                <form onSubmit={this.handleSubmit} className="comment-input-container">
                                        <input className="comment-input" 
                                                type="text" maxLength='75' 
                                                placeholder='Write a Comment' 
                                                onChange={this.handleComment} 
                                                value={this.state.body} />
                                </form>
                            </div>
                                <div className="comment-container">
                                    {showcomments}
                                </div>
                </div>
                {/* music content */}

                            <div className='main-col'>

                                <div className='who-to-follow'>
                                    <div className='wtf-title'>
                                        <i className='wtf-text' className="fa fa-users" aria-hidden="true"> Who to follow</i>
                                        <p>View All</p>
                                    </div>

                                    <div>
                                        {user_index}
                                    </div>
                                </div>

                                <div className='go-mobile'>
                                    <div className='wtf-title'>
                                        <p>About the creator </p>
                                        <p>View All</p>
                                    </div>
                                </div>

                                <div className='linkedin'>

                                    <a className="q" href='https://www.linkedin.com/in/jimmythanhnguyen/' target="_blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>

                                    <a className='q2' href='https://www.jimmynguyen.dev' target="_blank">
                                        <i className="fas fa-portrait"></i>
                                    </a>

                                    <a className='q3' href='https://github.com/jiminey' target="_blank">
                                        <i className="fab fa-github-square"></i>
                                    </a>

                                </div>

                            </div>


            </div> 
            {/* main page content */}

                   </div>


                </div> 
            
                <AudioPlayerContainer /> 


            </div>

        )
    };
    
    
};


export default SongShow