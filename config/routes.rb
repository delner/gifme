Rails.application.routes.draw do
  root to: "home#index"
  get ':search_term', to: "search#index"
  get ':search_term/:id', to: "search#view"
end
