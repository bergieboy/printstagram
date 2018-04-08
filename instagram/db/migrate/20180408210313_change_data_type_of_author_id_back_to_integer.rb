class ChangeDataTypeOfAuthorIdBackToInteger < ActiveRecord::Migration[5.1]
  def change
    change_column :photos, :author_id, 'integer USING CAST(author_id AS integer)'
  end
end
