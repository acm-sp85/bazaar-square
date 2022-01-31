class AddUserIdToWishlist < ActiveRecord::Migration[6.1]
  def change
    add_column :whishlists, :user_id, :integer
  end
end
