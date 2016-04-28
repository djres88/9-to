class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      session[:session_token] = @user.reset_token!
      render json: {username: @user.username}
      # render "api/users/show"
    else
      @errors = ['Invalid username or password']
      render "api/partials/_errors", status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      session[:session_token] = nil
      current_user.reset_token!
      @current_user = nil
      render "api/users/show"
    else
      @errors = ['User is not logged in']
      render "api/partials/_errors", status: 404
    end
  end

  def show
    @user = current_user

    if @user
      render json: @user
    else
      @errors = ['no user']
      render "api/partials/_errors"
    end
  end
end
