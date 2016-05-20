require 'byebug'

class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:session_token] = @user.reset_token!
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/partials/_errors", status: 422
    end
  end

  def show
    @reservations = Reservation.joins(:workspace).select("reservations.*, workspaces.*").where("reservations.user_id = ?", Integer(user_id))
    render json: @reservations
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

  def user_id
    params[:user_id]
  end
end
