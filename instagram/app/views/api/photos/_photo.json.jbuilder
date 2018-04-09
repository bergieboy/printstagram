json.extract! photo, :id, :author_id
json.img_url asset_path(photo.img_url.url)
json.author_img photo.author.img_url
json.author_username photo.author.username
json.author_id photo.author.id
json.author_name photo.author.name
