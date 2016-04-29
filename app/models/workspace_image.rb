# == Schema Information
#
# Table name: workspace_images
#
#  id            :integer          not null, primary key
#  url           :string           not null
#  workspace_id  :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  thumbnail_url :string           not null
#

class WorkspaceImage < ActiveRecord::Base
  validates :url, :thumbnail_url, :workspace_id, presence: true

  belongs_to :workspace
end
