class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :workspace_id, null: false
      t.integer :user_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status 
      t.timestamps null: false
    end

    add_index :reservations, :workspace_id
    add_index :reservations, :user_id
  end
end
