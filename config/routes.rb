NateMcgarigal::Application.routes.draw do
  root :to => 'application#index'
  
  resources :photo_galleries
  resources :photos
  resources :tags
    
  match 'contact' => 'contact#new', :as => 'contact', :via => :get
  match 'contact' => 'contact#create', :as => 'contact', :via => :post  
end
