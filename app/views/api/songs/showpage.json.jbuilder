
json.song do 
    json.set! @song.id do
        json.extract! @song, :id, :title, :artist, :uploader_id
        
        if @song.album_cover.attached? 
             json.album_coverUrl url_for(@song.album_cover)
        else 
            json.album_coverUrl ''
        end

        if @song.song_file.attached? 
            json.song_fileUrl url_for(@song.song_file)
        else 
            json.song_fileUrl ''
        end

    end
end 

json.comments do
    @song.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :user_id, :song_id
        end 
    end 
end
