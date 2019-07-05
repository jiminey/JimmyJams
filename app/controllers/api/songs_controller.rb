class APSongsController < ApplicationController

    def create
    
    end  

    def index
        
    end  

    def show

    end 

    def update

    end  

    def destroy

    end 

    private

    def song_params
        params.require(:songs).permit(:title, :artist, :album_cover, :song_file)
    end 


end