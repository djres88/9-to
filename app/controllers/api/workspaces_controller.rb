class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = Workspace.all

    if map_bounds
      @workspaces = @workspaces.in_map_bounds(map_bounds)
    end

    if capacity
      @workspaces = @workspaces.where("capacity >= ?", capacity)
    end

    # Need to check if office_types is empty
    if office_types
      @workspaces = @workspaces.where("officetype IN (?)", office_types)
    end

    if price
      if (Integer(price[:maxPrice]) >= 1000)
        @workspaces = @workspaces.where("price_week > ?", Integer(price[:minPrice]))
      else
        @workspaces = @workspaces.where("price_week > ? AND price_week < ?", Integer(price[:minPrice]), Integer(price[:maxPrice]))
      end
    end
    #
    # if dates
    #   @workspaces = @workspaces.select do |w|
    #     w.reservation_dates.none? { |date| dates.include?(date) }
    #   end
    # end
    # TODO: User order-by / Offset
    # n = page*19
    # .offset(page)

    render json: @workspaces.limit(18)
  end

  def show
    # Check if current user reserved. In the JSON object coming back, send reserved true. Reservation
    # Actually, the workspace needs to know its reservations anyway (for the calendar).
    @workspace = Workspace.find(params[:id])
    @owner = @workspace.owner
    @reservations = @workspace.reservations

    render "api/workspaces/show"
  end

  private
  def map_bounds
    params[:map_bounds]
  end

  def capacity
    params[:capacity]
  end
    # capacity: send data as a number, 1-5
    # params[:capacity]
    # office_types: send data as {office_types: []}
  def office_types
    params[:officeTypes]
  end

    # price: send data as {price: {low: , high: }}
  def price
    params[:price]
  end

  # send data as {dates: {start: 1/1/16, end: 1/1/16}}
  def dates
    params[:dates]
  end

  def page
    params[:page]
  end

end
