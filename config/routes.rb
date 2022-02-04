Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
      resources :users, only:[:create]
      resource :session, only:[:create, :destroy]
      resources :products, only:[:index, :show]
      resources :carts, only:[:index, :create, :update, :destroy]
      resources :reviews, only:[:create, :update, :destroy]
  end
end
