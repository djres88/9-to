require "byebug"

class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = Workspace.all
    # byebug
    if map_bounds
      @workspaces = @workspaces.in_map_bounds(map_bounds)
    end

    if capacity
      @workspaces = @workspaces.where("capacity >= ?", capacity)
    end

    if office_types

      @workspaces = @workspaces.where("officetype IN (?)", office_types)
    end
    # if office_types
    #   @workspaces = @workspaces.select { |w| office_types.include?(w.officetype) }
    # end
    #
    # if price
    #   @workspaces = @workspaces.select { |w| w.between?(price.low, price.high) }
    # end
    #
    # if dates
    #   @workspaces = @workspaces.select do |w|
    #     w.reservation_dates.none? { |date| dates.include?(date) }
    #   end
    # end

    render json: @workspaces
  end

  def show
    @workspace = Workspace.find(params[:id])
    @owner = @workspace.owner
    render "api/workspaces/show"
  end

  private
  def map_bounds
    params[:params]
  end

  def capacity
    params[:capacity]
  end
    # capacity: send data as a number, 1-5
    # params[:capacity]
    # office_types: send data as {office_types: []}
  def office_types
    params[:office_types]
  end

    # price: send data as {price: {low: , high: }}
  def price
    params[:price]
  end

  # send data as {dates: {start: 1/1/16, end: 1/1/16}}
  def dates
    params[:dates]
  end
end
