require "byebug"

class Api::WorkspacesController < ApplicationController
  def index
    workspaces = Workspace.all
    # byebug
    if (map_bounds)
      @workspaces = workspaces.in_map_bounds(map_bounds)
    end
    # @workspaces.filter_params(filter_params)

    render json: @workspaces
  end

  def show
    @workspace = Workspace.find(params[:id])
    @owner = @workspace.owner
    render "api/workspaces/show"
  end

  private
  def map_bounds
    params[:map_bounds]
  end

  def filter_params
    params.permit(:capacity, :office_types, :price)
    # capacity: send data as a number, 1-5
    # params[:capacity]

    # office_types: send data as {office_types: []}
    # params[:office_types]

    # price: send data as {price: {low: 1/1/16, high: 1/1/16}}
    # params[:price]
  end

  # send data as {dates: {start: 1/1/16, end: 1/1/16}}
  # def filter_dates
  #   params[:dates]
  # end
end
