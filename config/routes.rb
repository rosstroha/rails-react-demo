Rails.application.routes.draw do
  resources :movies
  get 'movie' => 'movie#index'
  root 'home#index'
end
