# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  artist      :string           not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null


class Song < ApplicationRecord
    validates :title, :artist, presence:true

    belongs_to :uploader, 
        foreign_key: :uploader_id, 
        class_name: :User

    has_one_attached :album_cover
    has_one_attached :song_file 

    
end
