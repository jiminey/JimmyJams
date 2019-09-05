import React from 'react';
import { Link } from 'react-router-dom';


const CommentIndexItem = (props) => {

    let user = props.users[props.comment.user_id];
    let currentUser = props.currentUser;

    //shows the delete button

    // function displayButton() {
    //     if (user.id === currentUser.id) {
    //         return (
    //             <div>
    //                 <i className="fas fa-times"></i>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // }




    return (
        <div>
            <div>   

                    <img src={user.photoUrl} alt="" />

                    <div>
                    <div>{user.username}</div>
                    <div>{props.comment.body}</div>

                    </div>

            </div>
            {/* <div className='deletecomment' onClick={() => props.deleteComment(props.comment.id)} >{displayButton()}</div> */}
        </div>
    )
}

export default CommentIndexItem;