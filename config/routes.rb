Rails.application.routes.draw do
  resources :reviews
  resources :item_types
  resources :cities
  resources :categories
  resources :items
  resources :users

  get "/items/:id", to: "items#show"
  get "/items/category/:category_id", to: "items#show_category_items"
  get "/users/:id", to: "users#show"
  get "/me", to: "users#logged_id"
  get "/items/find/:item_name", to: "items#find_by_name"

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post '/items', to: "items#create"

    delete "/logout", to: "sessions#logout"
end
