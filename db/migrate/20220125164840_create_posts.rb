class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :name, null:false
      t.text :description, null:false 
      t.string :category, null:false
      t.integer :price, null:false
      t.timestamps
    end
  end
end
