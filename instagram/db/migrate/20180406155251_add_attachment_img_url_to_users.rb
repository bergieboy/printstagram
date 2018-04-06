class AddAttachmentImgUrlToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :img_url
    end
  end

  def self.down
    remove_attachment :users, :img_url
  end
end
