Rails.application.routes.draw do
  get 'scores/index'
  post 'scores/create'
  get 'convention_character/index'
  root "main#index"
  get "/*path" => "main#index"
end
