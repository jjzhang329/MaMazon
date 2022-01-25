class ChangePostToProduct < ActiveRecord::Migration[5.2]
  def change
    rename_table :posts, :products
  end
end
