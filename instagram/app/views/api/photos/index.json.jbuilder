json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end

json.comments do
  @photos.each do |photo|
    photo.comments.each do |comment|
      json.set! comment.id do
        json.partial! '/api/comments/comment', comment: comment
      end
    end
  end
end

json.likes do
  @photos.each do |photo|
    photo.likes.each do |like|
      json.partial! '/api/likes/like', like: like
    end
  end
end
