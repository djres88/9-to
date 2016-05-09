class Api::ReservationsController < ApplicationController
  def create
    reservation_params[:start_date] = Date.parse(reservation_params[:start_date])
    reservation_params[:end_date] = Date.parse(reservation_params[:end_date])

    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render json: @reservation
    else
      render json: {errors: ["Invalid reservation."]}
    end
  end

  def index
    @reservation = Reservation.where("workspace_id = ?", reservation_params[:workspace_id])

    if @reservation
      render json: @reservation
    else
      render json: {errors: [""]}, status: 404
    end
  end

  private
  def reservation_params
    params.require(:reservation).permit(:workspace_id, :user_id, :start_date, :end_date)
  end
end
