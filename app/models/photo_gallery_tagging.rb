class PhotoGalleryTagging < ActiveRecord::Base
  attr_accessible :photo_gallery_id, :tag_id
  
  belongs_to :photo_gallery
  belongs_to :tag
end
