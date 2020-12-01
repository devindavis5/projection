Rails.application.routes.draw do
  patch '/team_member_project_tasks/', to: "team_member_project_tasks#destroy"
  get '/user', to: 'users#show'
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
