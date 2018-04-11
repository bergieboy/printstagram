json.user do
  json.partial! 'api/users/user', user: @photo.author
end

json.photos do
  @photo.author.photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end
