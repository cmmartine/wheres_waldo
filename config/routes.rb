Rails.application.routes.draw do
  get 'main/index'
  root "main#index"

  resources :convention_characters, only: [:index]
end
