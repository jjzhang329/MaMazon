class Changenull < ActiveRecord::Migration[5.2]
  def change
    change_column :carts, :quantity, :integer, null:false
    change_column :carts, :product_id, :integer, null:false
  end
end
