class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.integer :uploader_id, null:false

      t.index :uploader_id
      t.timestamps
    end
  end
end
