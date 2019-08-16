class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :song_id, null: false

      t.index :song_id
      t.index :user_id
      t.timestamps
    end
  end
end
