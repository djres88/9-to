class AddThumbnail < ActiveRecord::Migration
  def change
    add_column :workspaces, :thumbnail_url, :string
  end
end
