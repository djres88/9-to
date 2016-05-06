Rails.application.routes.draw do
  root to: "static#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]

    resources :workspaces, only: [:index, :show] do
      resources :reservations, only: [:create, :index, :update, :destroy, :show]
    end
  end
end
