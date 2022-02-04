class Changecol < ActiveRecord::Migration[5.2]
  def change
    add_index :carts, :user_id
  end
end
