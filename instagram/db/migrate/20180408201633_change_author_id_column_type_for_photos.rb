class ChangeAuthorIdColumnTypeForPhotos < ActiveRecord::Migration[5.1]
  def change
    change_column :photos, :author_id, :string
  end
end
