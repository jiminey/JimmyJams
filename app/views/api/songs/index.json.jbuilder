@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :title, :artist

        if song.album_cover.attached? 
            json.album_coverURL url_for(song.album_cover)
        else 
            json.album_coverURL ''
        end

         if song.song_file.attached? 
            json.song_fileURL url_for(song.song_file)
        else 
            json.song_fileURL ''
        end
    end
end