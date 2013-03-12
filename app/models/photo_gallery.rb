class PhotoGallery < ActiveRecord::Base
  attr_accessible :name, :tag_ids
  
  has_many :photo_gallery_taggings
  has_many :tags, :through => :photo_gallery_taggings
  
end

