class RemoveWishlistIdFromItems < ActiveRecord::Migration[6.1]
  def change
    remove_column :items, :wishlist_id, :integer
  end
end
