Rails.application.routes.draw do
  get 'convention_character/index'
  root "main#index"
  get "/*path" => "main#index"
end
