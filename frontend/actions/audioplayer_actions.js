

export const PLAYSONG = 'PLAYSONG'
export const PAUSE = 'PAUSE'
export const RESUME = 'RESUME'

export const playSong = (song) => ({
    type: PLAYSONG, 
    song_fileUrl: song.song_fileUrl
})


export const resume = () => ({
    type: RESUME,
});

export const pauseSong = () => ({
    type: PAUSE,
});