class Api::WorkspacesController < ApplicationController
  def index
    # Add the boundaries so your query can specify something like "where lat between, long between"
    # [params[idx1]..params[idx2]]
    @workspaces = Workspace.all
    render json: @workspaces
  end

  def show
    @workspace = Workspace.includes(:owner).find(params[:id])
    render json: @workspace
  end

  private
  # def search_range
  #
  # end
end
