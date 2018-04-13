class Photo < ApplicationRecord
  validates :author_id, presence: true

  has_attached_file :img_url, default_url: "img_not_found.png"
  validates_attachment_content_type :img_url, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :likes

  has_many :likers,
    through: :likes,
    source: :user

  has_many :comments,
    class_name: :Comment,
    foreign_key: :photo_id

  def like_count
    self.likes.length
  end

  def timestamp
    if self.created_at.strftime("%Y") == Time.now.strftime("%Y")
      mdy =  self.created_at.strftime("%B %d")
    else
      mdy = self.created_at.strftime("%B %d, %Y")
    end
    #delta in seconds
    delta = (Time.now.to_i - self.created_at.to_i)

    s_per_minute = 60
    s_per_hour = s_per_minute * 60
    s_per_day = s_per_hour * 24
    s_per_week = s_per_day * 7

    if delta < s_per_minute
      timestamp = "#{(delta).floor} seconds ago"
    elsif delta < s_per_hour
      timestamp = "#{(delta / s_per_minute).floor} minutes ago"
    elsif delta < s_per_day
      if delta < (s_per_hour * 2)
        timestamp = "#{(delta / s_per_hour).floor} hour ago"
      else
        timestamp = "#{(delta / s_per_hour).floor} hours ago"
      end
    elsif delta < s_per_week
      timestamp = "#{(delta / s_per_day).floor} days ago"
    else
      timestamp = mdy
    end

    timestamp
  end

end
