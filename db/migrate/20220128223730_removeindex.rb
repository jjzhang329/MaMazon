class Removeindex < ActiveRecord::Migration[5.2]
  def change
    remove_index :carts, :user_id
    
  end
end
