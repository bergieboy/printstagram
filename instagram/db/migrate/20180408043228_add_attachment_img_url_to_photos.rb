class AddAttachmentImgUrlToPhotos < ActiveRecord::Migration[5.1]
  def self.up
    change_table :photos do |t|
      t.attachment :img_url
    end
  end

  def self.down
    remove_attachment :photos, :img_url
  end
end
