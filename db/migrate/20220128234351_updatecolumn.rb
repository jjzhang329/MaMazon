class Updatecolumn < ActiveRecord::Migration[5.2]
  def change
    change_column :carts, :quantity, :integer, null:true
  end
end
