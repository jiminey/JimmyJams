import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = (props) => {

    let user = props.users[props.comment.user_id];
    let currentUser = props.currentUser;

    //shows the delete button

    function displayDelete() {
        if (user.id === currentUser.id) {
            return (
                <div>
                    <i className="fas fa-times"></i>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }




    return (
        <div>
            <div className="comment-main">
                
                <div className="comment-body">
                    <img className='comment-pic' src={user.photoUrl} alt="" />

                    <div className='comment-words'>
                        <div>{user.username}</div>
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