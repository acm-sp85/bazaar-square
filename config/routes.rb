Rails.application.routes.draw do
  resources :item_types
  resources :cities
  resources :categories
  resources :items
  resources :users

  get "/items/:id", to: "items#show"

end
