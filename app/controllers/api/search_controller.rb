class Api::SearchController < ApplicationController

    def search
        @search = Song.where(
            "title ILIKE ?",
            # "artist ILIKE ?",
            "%#{params["str"]}%"
            # "%#{params["str"]}%" ## might have to remove this one
        )
        render json: @search
    end


    private
    def search_params
        params.require(:search).permit(:str)
    end
    
end