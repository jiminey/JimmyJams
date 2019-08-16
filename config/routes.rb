Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do 
    get '/search', to: 'search#search'
    resources :users, only: [:create , :index, :show]
    resource :session, only: [:create, :new, :destroy]
    resources :songs, only: [:create, :destroy, :show, :update, :index ] do
      resources :comments, only: [:create]
    end 
    resources :comments, only: [:destroy]
  end 

end
