class Changecolumnnull < ActiveRecord::Migration[5.2]
  def change
      change_column :carts, :prodcut_id, :integer, :null=>true
      rename_column :carts, :prodcut_id, :product_id
  end
end
