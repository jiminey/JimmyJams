class Api::SearchController < ApplicationController
     def index
        @input = search_params[:input]
        if @input.empty?
            render json: {}
            return
        end

        @songs = Song.where("title ILIKE (?)",  "%#{@input}%").with_attached_album_cover
        
        render :index
    end

    private
    
    def search_params
        params.require(:search).permit(:input)
    end
end
