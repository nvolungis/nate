class AddPublicColumnToPhotoGalleries < ActiveRecord::Migration
  def change
    add_column :photo_galleries, :public, :boolean
  end
end
