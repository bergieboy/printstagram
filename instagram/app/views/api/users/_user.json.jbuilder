json.extract! user, :id, :username, :name, :bio
json.img_url asset_path(user.img_url.url)
json.photo_count user.photo_count
