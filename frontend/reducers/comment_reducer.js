import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';
import { RECEIVE_SONG } from '../actions/song_actions';
import { merge } from 'lodash'


const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign(newState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            delete newState[action.commentId.id];
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