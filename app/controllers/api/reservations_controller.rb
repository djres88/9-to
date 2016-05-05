class Api::ReservationsController < ApplicationController
  def create
    reservation_params.start_date = Date.new(reservation_params.start_date)
    reservation_params.end_date = Date.new(reservation_params.end_date)

    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render json: @reservation
    end
  end

  private
  def reservation_params
    params.require(:reservation).permit(:workspace_id, :user_id, :start_date, :end_date)
  end
end
