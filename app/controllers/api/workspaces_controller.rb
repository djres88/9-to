require "byebug"

class Api::WorkspacesController < ApplicationController
  def index
    # Add the boundaries so your query can specify something like "where lat between, long between"
    # [params[idx1]..params[idx2]]
    @workspaces = Workspace.all
    render json: @workspaces
  end

  def show
    @workspace = Workspace.find(params[:id])
    @owner = @workspace.owner
    render "api/workspaces/show"
  end

  private
  # def search_range
  #
  # end
end
