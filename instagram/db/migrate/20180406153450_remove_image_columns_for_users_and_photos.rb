class RemoveImageColumnsForUsersAndPhotos < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :img_url
    remove_column :photos, :img_url
  end
end
