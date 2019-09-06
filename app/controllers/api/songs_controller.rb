class Api::SongsController < ApplicationController

    def create
        @song = Song.new(song_params)
        @song.uploader_id = current_user.id

        
        if @song.save
            render 'api/songs/show'
        else
            render json: @song.errors.full_messages, status: 422
        end 

    end  

    def index
        @songs = Song.all
        render 'api/songs/index' 
    end  

    def show
        @song = Song.find(params[:id])
        render 'api/songs/showpage'
    end 

    def update
        @song = current_user.songs.find(params[:id])

        if @song.update_attributes(song_params)
            render 'api/songs/show'
        else 
            render json: @song.errors.full_messages, status: 422
        end 
    end  

    def destroy
        @song = Song.find(params[:id])
        @song.destroy 
        render 'api/songs/show'

    end 

    private

    def song_params
        params.require(:song).permit(:title, :artist, :album_cover, :song_file)
    end 


end