import * as APICommentUtil from '../util/comment_api_util'

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

export const createComment = (comment, songId) => dispatch => (
    APICommentUtil.createComment(comment, songId).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
    APICommentUtil.deleteComment(comment).then(comment => dispatch(removeComment(comment)))
);

