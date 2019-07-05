class Song < ApplicationRecord

    validates: :title, :artist, presence: true

    belongs_to :uploader,
    primary_key: :id, 
    foreign_key: :uperloader_id,
    class_name: 

end
