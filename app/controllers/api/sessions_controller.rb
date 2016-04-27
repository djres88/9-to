class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      session[:session_token] = @user.reset_session_token!
      render "api/users/show"
    else
      @errors = ['Invalid username or password']
      render "api/partials/_errors", status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      session[:session_token] = nil
      current_user.reset_session_token!
      @current_user = nil
      retner "api/users/show"
    else
      @errors = ['User is not logged in']
      render "api/partials/_errors", status: 404
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = nil
      render "api/partials/_errors", status: 404
    end
  end
end
