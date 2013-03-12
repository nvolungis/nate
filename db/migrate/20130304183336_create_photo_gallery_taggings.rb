class CreatePhotoGalleryTaggings < ActiveRecord::Migration
  def change
    create_table :photo_gallery_taggings, :id => false do |t|
      t.integer :photo_gallery_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
