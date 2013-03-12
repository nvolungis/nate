class Photo < ActiveRecord::Base
  attr_accessible :description, :name, :image, :tag_ids
  
  has_many :taggings
  has_many :tags, :through => :taggings
  
  has_attached_file :image, 
                    :styles => { :large => "1200x800>", 
                                 :large_retina => "2400x1600>",
                                 :medium => "800x600>",
                                 :medium_retina => '1600x1200>',
                                 :small => "300x200>",
                                 :small_retina => "600x400>" }, 
                    :default_url => "/images/:style/missing.png"
end
