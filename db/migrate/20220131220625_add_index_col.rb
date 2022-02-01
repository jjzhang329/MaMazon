class AddIndexCol < ActiveRecord::Migration[5.2]
  def change
    add_index :carts, [:user_id, :product_id], unique:true
  end
end
