Rails.application.routes.draw do
  resources :item_types
  resources :cities
  resources :categories
  resources :items
  resources :users

  get "/items/:id", to: "items#show"
  get "/users/:id", to: "users#show"
  get "/me", to: "users#logged_id"

  post "/login", to: "sessions#create"

end
