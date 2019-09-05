import React from 'react'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'
import NavBarContainer from '../navbar/navbar_container'
import CommentIndexItem from '../comment/comment_index_item'


class SongShow extends React.Component {
    constructor(props){
        super(props)


        this.state = {
            body: "",
            localAudio: new Audio(`${this.props.song.song_fileUrl}`),
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
        this.props.fetchAllUsers().then(() => this.props.fetchSong(songId));
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
            // let owner = this.props.users[this.props.song.uploader]
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
        
        


        // let frontcomments = this.props.comments.map (comment => {
        //     return (
        //         <div className="div-c">
        //             <p className='comms'>  {comment} </p>
        //             {/* <i onClick={this.handleX} className="x" className="fa fa-times" aria-hidden="true"></i> */}
        //         </div>
        //     )
        // })

        return (
            <div>
                <NavBarContainer /> 
                <div className='show-body'>


                   <div className='show-top'>


                       <div className='show-top-left'>
                           <div className='show-top-left-2'> 
                                {/* <img onClick={this.play} className='orangeplay' src='https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/orangeplay.png?raw=true' ></img> */}
                                {this.toggleDisplay()}
                                    <div className='top-words'>
                                        <div className='top-artist'>{this.props.song.artist}</div>
                                        <div className='top-title'>{this.props.song.title}</div>
                                        <div>
                                            <img className='waveform' src='waveform.png'></img>
                                        </div>
                                    </div>


                           </div>

                            {/* waveform here */}
                           <div>

                           </div>
                            <button onClick={this.handleDelete}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
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
                                    <img className='comment-input-pic' src={this.props.currentUser.photoUrl} alt="" />
                                </div>
                                <form onSubmit={this.handleSubmit} className="comment-input-container">
                                        <input className="comment-input" 
                                                type="text" maxLength='75' 
                                                placeholder='Write a Comment' 
                                                onChange={this.handleComment} 
                                                value={this.state.body} />
                                </form>
                            </div>

                                {/* <div> {comment_item} </div> */}

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

                <div className='display-threes'>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                </div>
                
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className="fa fa-heart" aria-hidden="true"> You might like</i>
                        <p>View All</p>
                    </div>

                    <div className='display-threes'>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                         </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className="fa fa-calendar" aria-hidden="true"> Listening history</i>
                        <p>View All</p>
                    </div>

                    <div className='display-threes'>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                         </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i className="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i className="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i className="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i className="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='go-mobile'>
                    <div className='wtf-title'>
                        <p>Go mobile</p>
                        <p>View All</p>
                    </div>
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