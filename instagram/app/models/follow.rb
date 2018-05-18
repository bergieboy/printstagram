class Follow < ApplicationRecord
  validates :follower_id, presence: true, uniqueness: { scope: :followee_id}

  belongs_to :follower,
  foreign_key: :follower_id,
  class_name: :User

  belongs_to :followee,
  foreign_key: :followee_id,
  class_name: :User

end
