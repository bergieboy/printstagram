Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: %i[create destroy show]
    resources :photos, only: %i[create destroy index show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

end
