import * as APISongUtil from "../util/song_api_util";

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_ONE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const RECEIVE_SONG_COMMENTS = "RECEIVE_SONG_COMMENTS";

const receiveSongComments = payload => ({
  type: RECEIVE_SONG_COMMENTS,
  payload
});

const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

const removeSong = song => ({
  type: REMOVE_SONG,
  songId: song.id
});

const receiveSongErrors = errors => ({
  type: RECEIVE_SONG_ERRORS,
  errors
});

export const fetchAllSongs = () => dispatch =>
  APISongUtil.fetchAllSongs().then(songs => dispatch(receiveAllSongs(songs)));

export const fetchSong = id => dispatch =>
  APISongUtil.fetchSong(id).then(song => dispatch(receiveSongComments(song)));

export const createSong = song => dispatch =>
  APISongUtil.createSong(song).then(song => dispatch(receiveSong(song)));

export const updateSong = song => dispatch =>
  APISongUtil.updateSong(song).then(song => dispatch(receiveSong(song)));

export const deleteSong = id => dispatch =>
  APISongUtil.deleteSong(id).then(song => dispatch(removeSong(song)));
