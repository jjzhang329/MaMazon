class ChangeNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :headline, true
  end
end
