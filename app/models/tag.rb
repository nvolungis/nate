class Tag < ActiveRecord::Base
  attr_accessible :name
  
  has_many :taggings
  has_many :photos, :through => :taggings
  
  has_many :photo_gallery_taggings
  has_many :photo_galleries, :through => :photo_gallery_taggings
end
