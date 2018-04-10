Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :photos, only: [:index]
    end
    resource :session, only: %i[create destroy show]
    resources :photos, only: %i[create destroy index show]
    resources :likes, only: [:create]
    delete '/likes', to: 'likes#destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

end
