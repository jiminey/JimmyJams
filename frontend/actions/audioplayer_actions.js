export const PLAYSONG = "PLAYSONG"
export const PAUSESONG= "PAUSESONG"
export const RESUME = "RESUME"

export const playSong = (song, audio) => ({
    type: PLAYSONG,
    songUrl: song.song_fileUrl, 
    songId: song.id,
    currentSong: song,
    currentAudio: audio, 

})

export const pauseSong = () => ({
    type: PAUSESONG,
    
})

export const resume = () => ({
    type: RESUME
})

