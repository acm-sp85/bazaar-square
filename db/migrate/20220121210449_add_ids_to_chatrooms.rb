class AddIdsToChatrooms < ActiveRecord::Migration[6.1]
  def change
    add_column :chatrooms, :userA_id, :integer
    add_column :chatrooms, :userB_id, :integer
  end
end
