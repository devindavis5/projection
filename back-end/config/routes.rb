Rails.application.routes.draw do
  resources :daily_tasks
  resources :team_members
  resources :team_member_project_tasks
  resources :project_tasks
  resources :contacts
  resources :projects
  resources :users
  post '/auth', to: 'api/v1/auth#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
