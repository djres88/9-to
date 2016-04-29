class RemoveTypeAddOfficeType < ActiveRecord::Migration
  def change
    remove_column :workspaces, :type, :string
    add_column :workspaces, :officetype, :string
  end
end
