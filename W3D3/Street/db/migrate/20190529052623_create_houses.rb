class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.timestamp
    end
  end
end
