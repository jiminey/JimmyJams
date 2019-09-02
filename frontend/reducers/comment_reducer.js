import { CREATE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';
import { RECEIVE_SONG } from '../actions/song_actions';
import { merge } from 'lodash'

const  initialState = {comments:['this is a hella dope song!', 'sweeeet ear candy', 'this is a comment and you are awesome' ]}
const commentsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case CREATE_COMMENT:
            return Object.assign(newState, {comments: [...newState.comments, action.comment] });
        case REMOVE_COMMENT:
            newState = newState.comments.filter( el => el !== action.commentId)
            return newState;
        case RECEIVE_SONG:
            if (action.payload.comments === undefined) {
                return {};
            } else {
                return Object.assign({}, action.payload.comments);

            };
        default:
            return oldState;
    }
};

export default commentsReducer;