import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';



const commentsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign(newState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            delete newState[action.comment.id];
            return newState;
        default:
            return oldState;
    }
};

export default commentsReducer;