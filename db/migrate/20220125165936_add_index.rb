class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :products, [:category, :name]
  end
end
