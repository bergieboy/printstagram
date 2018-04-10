class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.string :user_id, null: false
      t.string :photo_id, null: false

      t.timestamps
    end
    add_index :likes, [:photo_id, :user_id], unique: true
    add_index :likes, :user_id
  end
end
