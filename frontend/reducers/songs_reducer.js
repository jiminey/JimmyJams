import { RECEIVE_SONG, RECEIVE_ALL_SONGS, REMOVE_SONG , RECEIVE_SONG_COMMENTS} from '../actions/song_actions';


const songsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign(newState, { [action.song.id]: action.song });
        case RECEIVE_ALL_SONGS:
            return action.songs;
        case REMOVE_SONG:
            delete newState[action.songId];
            return newState;
        case RECEIVE_SONG_COMMENTS:
            debugger
            return Object.assign(newState, action.payload.song);   
        default:
            return oldState;
    }
};

export default songsReducer;