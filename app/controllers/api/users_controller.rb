class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:session_token] = @user.reset_session_token!
      render "api/users/show"
    else
      # Render an error partial?
      @errors = @user.errors.full_messages
      render "api/partials/_errors", status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
