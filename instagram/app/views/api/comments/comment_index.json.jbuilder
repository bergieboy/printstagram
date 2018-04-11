json.comment do
  json.partial! 'api/comments/comment', comment: @comment
end

json.photo do
  json.partial! 'api/photos/photo', photo: @comment.photo
end
