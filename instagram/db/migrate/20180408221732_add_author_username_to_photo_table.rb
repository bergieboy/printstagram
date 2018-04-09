class AddAuthorUsernameToPhotoTable < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :author_username, :string
  end
end
