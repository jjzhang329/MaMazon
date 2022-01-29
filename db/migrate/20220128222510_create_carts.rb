class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
        t.integer :user_id, null:false
        t.integer :prodcut_id, null:false
        t.integer :quantity, null:false
      t.timestamps
    end
    add_index :carts, :user_id, unique:true
    add_index :carts, :prodcut_id
  end
end
