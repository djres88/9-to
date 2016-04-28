class CreateWorkspaces < ActiveRecord::Migration
  def change
    create_table :workspaces do |t|
      t.string :description, null: false
      t.string :type, null: false
      t.integer :capacity, null: false
      t.string :address, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :price_week, null: false
      t.integer :price_month, null: false
      t.string :photos_url, null: false
      t.string :owner_id, null: false

      t.timestamps null: false
    end

    add_index :workspaces, :owner_id
  end
end
