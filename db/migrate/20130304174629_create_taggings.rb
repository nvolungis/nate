class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings, :id => false do |t|
      t.integer :tag_id
      t.integer :photo_id

      t.timestamps
    end
  end
end
