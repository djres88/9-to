class WorkspaceImage < ActiveRecord::Base
  validates :url, :workspace_id, presence: true

  belongs_to :workspace
end
