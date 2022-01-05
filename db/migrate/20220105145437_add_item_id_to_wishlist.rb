class AddItemIdToWishlist < ActiveRecord::Migration[6.1]
  def change
    add_column :wishlists, :item_id, :integer
  end
end
