json.photo do
  json.partial! 'api/photos/photo', photo: @comment.photo
end
