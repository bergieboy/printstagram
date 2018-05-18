json.extract! user, :id, :username, :name, :bio
json.img_url asset_path(user.img_url.url)
json.photo_count user.photo_count
json.followings_by_id user.user_followings.map(&:id)
json.followers_by_id user.user_followers.map(&:id)
json.followed user.followers.map(&:id).include?(current_user.id)
