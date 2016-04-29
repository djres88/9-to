class ChangeWorkspacePhotosColumn < ActiveRecord::Migration
  def change
    remove_column :workspaces, :photos_url, :string
    add_column :workspaces, :main_photo_url, :string
  end
end
