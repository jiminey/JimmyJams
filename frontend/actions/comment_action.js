export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment,
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});


