
json.follow do
  json.partial! '/api/follows/follow', follow: @follow
end

json.user do
  json.partial! '/api/users/user', user: @follow.followee
end
