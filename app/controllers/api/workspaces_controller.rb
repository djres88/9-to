class Api::WorkspacesController < ApplicationController
  def index
    # Add the boundaries so your query can specify something like "where lat between, long between"
    @workspaces = Workspace.all
    render json: @workspaces
  end

  def show
    @workspace = Workspace.find(params[:id]).includes(:owner)
    render json: @workspace
  end

  private
  # def search_range
  #
  # end
end
