class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true

  # paperclip validations
  has_attached_file :img_url, default_url: "missing_profile.png"
  validates_attachment_content_type :img_url, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :photos,
    class_name: :Photo,
    foreign_key: :author_id

  attr_reader :password

  def photo_count
    self.photos.length
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
