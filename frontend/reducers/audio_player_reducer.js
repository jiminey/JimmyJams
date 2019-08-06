import {PLAYSONG, PAUSESONG, RESUME} from '../actions/audioplayer_actions'
import {RECIEVE_ALL_SONGS} from '../actions/song_actions'

const intialState = {playState: false, songUrl: null, songId: null, songList: [], currentSong: null, currentAudio: null}

const audioPlayersReducer = (oldState = intialState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({} , oldState);
    switch (action.type) {
        case PLAYSONG:
            return Object.assign(newState, { currentSong: action.currentSong, songId: action.songId, songUrl: action.songUrl, playState: true, currentAudio: action.currentAudio } )
        case PAUSESONG:
            return Object.assign(newState, {playState: false})
        case RESUME:
            return Object.assign(newState, {playState: true})
        case RECIEVE_ALL_SONGS:
            return Object.assign(newState, {songList: Object.values(action.songs)} )
        default: 
            return oldState
    }
}


export default audioPlayersReducer