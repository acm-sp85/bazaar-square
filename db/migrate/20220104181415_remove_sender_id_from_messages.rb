class RemoveSenderIdFromMessages < ActiveRecord::Migration[6.1]
  def change
    remove_column :messages, :sender_id
    remove_column :messages, :receiver_id
  end
end
