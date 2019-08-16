# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, presence:true
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :song, 
        foreign_key: :song_id,
        class_name: :Song 
end
