class AddThumbnails < ActiveRecord::Migration
  def change
    add_column :workspace_images, :thumbnail_url, :string, null: false
  end
end
