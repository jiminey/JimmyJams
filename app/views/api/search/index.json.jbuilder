unless @songs.empty?
    json.songs do
        @songs.each do |song|
            json.set! song.id do
                json.extract! song, :id, :title, :artist
                json.album_cover url_for(album.album_cover)
                json.songIds @songs.pluck(:id)
            end
        end
    end
else
    json.songs do
    end
end