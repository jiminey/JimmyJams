import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = (props) => {

    let user = props.users[props.comment.user_id];
    let currentUser = props.currentUser;
    let pic;

    //shows the delete button

    function displayDelete() {
        if (currentUser) {
            if (user.id === currentUser.id){

                return (
                    <div>
                    <i className="fas fa-times"></i>
                    </div>
                )
            }
        } else {
            return (
                <div></div>
            )
        }
    }

    if (user.photoUrl) {
        pic = user.photoUrl
    } else {
        pic = 'https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/profilepic.png?raw=true'
    }

    return (
        <div>
            <div className="comment-main">
                


                <div className="comment-body">
                    <Link to={`/users/${user.id}`}>
                        <img className='comment-pic' src={pic} alt='' />                        
                    </Link>
                    <div className='comment-words'>
                        <Link to={`/users/${user.id}`}>
                            <div>{user.username}</div>
                        </Link>
                        <div>{props.comment.body}</div>
                    </div>
                </div>

                <div className="comment-delete">
                    <div onClick={() => props.deleteComment(props.comment.id)} >{displayDelete()}</div>
                </div>

            </div>
        </div>
    )
}

export default CommentIndexItem;