collection @photo_galleries

attributes :id, :name, :created_at, :updated_at

node do |photo_gallery|
{
  :created_at_formatted => photo_gallery.created_at.strftime("%m/%d/%Y"),
  :updated_at_formatted => time_ago_in_words(photo_gallery.updated_at) 
}
end

child :tags  do
  attributes :name 
end