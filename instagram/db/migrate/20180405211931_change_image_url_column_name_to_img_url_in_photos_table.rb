class ChangeImageUrlColumnNameToImgUrlInPhotosTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :photos, :image_url, :img_url
  end
end
