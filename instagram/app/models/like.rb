class Like < ApplicationRecord
  validates :user_id, :photo_id, presence: true

  belongs_to :photo

  belongs_to :user


end
