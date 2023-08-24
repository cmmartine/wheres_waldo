Rails.application.routes.draw do
  get 'scores/index'
  get 'scores/create'
  get 'convention_character/index'
  root "main#index"
  get "/*path" => "main#index"
end
