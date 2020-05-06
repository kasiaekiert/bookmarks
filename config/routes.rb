Rails.application.routes.draw do
  resources :domains
  resources :marks, path: 'links'
  root to: 'marks#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
