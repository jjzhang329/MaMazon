class UpdateColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :session_toke, :session_token
  end
end
