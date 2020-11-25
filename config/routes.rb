Rails.application.routes.draw do
  resources :movies
  get 'movie/:imdb_id' => 'movie#index'
  root 'home#index'
end
