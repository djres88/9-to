class AddCityToWorkspace < ActiveRecord::Migration
  def change
    add_column :workspaces, :city, :string
  end
end
